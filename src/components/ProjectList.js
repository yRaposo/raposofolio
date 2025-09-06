'use client'

import { useEffect, useState } from "react"
import Block from "./Blocks"
import { queryDatabase } from "@/service/databaseService";

export default function ProjectList({ props }) {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        queryDatabase('1ecb6aeff44b800c8fafc2ca2012ff37')
            .then((data) => {
                setBlocks(data);
                console.log("Blocos obtidos:", data);
            })
            .catch((error) => {
                console.error("Erro ao obter os blocos:", error);
            });
    }, []);

    if (props?.mini) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full px-2">
                <div className="grid md:grid-cols-3 w-full h-full gap-4">
                    {blocks?.results?.slice(0, 3).map((block) => (
                        <Block key={block.id} pageId={block.id} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center w-full px-10 md:px-30">
            <div className="grid md:grid-cols-3 gap-4">
                {blocks?.results?.map((block) => (
                    <Block key={block.id} pageId={block.id} />
                ))}
            </div>
        </div>
    )
}