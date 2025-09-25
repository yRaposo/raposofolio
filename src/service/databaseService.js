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
            sorts: [
                {
                    property: "Destaque",
                    direction: "descending"
                }
            ]
        });
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}

// Função adicional para permitir sorting customizado
export async function queryDatabaseWithSort(databaseId, sortProperty = "Destaque", direction = "ascending") {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            page_size: 100,
            sorts: [
                {
                    property: sortProperty,
                    direction: direction
                }
            ]
        });
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}