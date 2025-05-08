'use server'
import notion from "@/libs/notion";
import { NotionToMarkdown } from "notion-to-md";

export default async function notionToMd(page_id) {
    try {
        const n2m = new NotionToMarkdown({ notionClient: notion });
        const mdBlocks = await n2m.pageToMarkdown(page_id);
        const mdString = n2m.toMarkdownString(mdBlocks);

        console.log("Markdown gerado:", mdString); // Verifique o valor retornado
        return mdString || ""; // Retorna uma string vazia se mdString for undefined
    } catch (error) {
        console.error("Erro ao converter para Markdown:", error);
        return ""; // Retorna uma string vazia em caso de erro
    }
}