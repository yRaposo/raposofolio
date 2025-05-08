'use server';

import notion from "@/libs/notion";



export async function getDatabase(databaseId) {
    try {
        const response = await notion.databases.retrieve({ database_id: databaseId });
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}

export async function queryDatabase(databaseId) {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            page_size: 100,
        });
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}