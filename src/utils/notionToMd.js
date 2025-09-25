'use server'
import notion from "@/libs/notion";
import { NotionToMarkdown } from "notion-to-md";

export default async function notionToMd(page_id) {
    try {
        const n2m = new NotionToMarkdown({ notionClient: notion });

        // Configurar transformadores personalizados para diferentes tipos de blocos
        n2m.setCustomTransformer("video", (block) => {
            const { video } = block;
            if (!video) return "";

            const videoUrl = video.file?.url || video.external?.url;
            if (!videoUrl) return "";

            // Para vídeos do YouTube, extrair o ID e criar embed
            const youtubeMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
            if (youtubeMatch) {
                const videoId = youtubeMatch[1];
                return `<div class="video-embed"><iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>\n\n`;
            }

            // Para outros vídeos, usar tag video
            return `<video controls width="100%"><source src="${videoUrl}" type="video/mp4">Seu navegador não suporta vídeo.</video>\n\n`;
        });

        n2m.setCustomTransformer("embed", (block) => {
            const { embed } = block;
            if (!embed?.url) return "";

            const url = embed.url;

            // YouTube embeds
            if (url.includes('youtube.com') || url.includes('youtu.be')) {
                const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
                if (youtubeMatch) {
                    const videoId = youtubeMatch[1];
                    return `<div class="video-embed"><iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>\n\n`;
                }
            }

            // Outros embeds
            return `<div class="embed-container"><iframe src="${url}" width="100%" height="400" frameborder="0"></iframe></div>\n\n`;
        });

        n2m.setCustomTransformer("file", (block) => {
            const { file } = block;
            if (!file) return "";

            const fileUrl = file.file?.url || file.external?.url;
            const fileName = file.name || "Download";

            if (!fileUrl) return "";

            return `[📁 ${fileName}](${fileUrl})\n\n`;
        });

        n2m.setCustomTransformer("link_preview", (block) => {
            const { link_preview } = block;
            if (!link_preview?.url) return "";

            const url = link_preview.url;
            return `[🔗 ${url}](${url})\n\n`;
        });

        const mdBlocks = await n2m.pageToMarkdown(page_id);
        const mdString = n2m.toMarkdownString(mdBlocks);

        console.log("Markdown gerado:", mdString);
        console.log("Tipo do markdown:", typeof mdString);

        // Garantir que sempre retorna uma string
        if (typeof mdString === 'string') {
            return mdString;
        } else if (mdString && typeof mdString === 'object') {
            return mdString.parent || mdString.content || "";
        }

        return "";
    } catch (error) {
        console.error("Erro ao converter para Markdown:", error);
        return "";
    }
}