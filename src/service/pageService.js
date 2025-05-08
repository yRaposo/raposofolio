'use server';

import notion from "@/libs/notion";

export async function getPageData(pageId) {
    try {
        const response = await notion.pages.retrieve({
            page_id: pageId,
            page_size: 100,
        })
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}

export async function getPageItemData(pageId, propertyId) {
    try {
        const response = await notion.pages.retrieve({
            page_id: pageId,
            property_id: propertyId,
            page_size: 100,
        })
        return response;
    } catch (error) {
        console.error("Erro ao obter bloco:", error);
        throw error;
    }
}