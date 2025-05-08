'use server';

import notion from "@/libs/notion";



export async function getBlockData(blockId) {
    try {
        const response = await notion.blocks.children.list({
            block_id: blockId,
            page_size: 100,
        })
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}