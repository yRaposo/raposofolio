'use client'

import { useEffect, useState } from "react"
import Block from "./Blocks"
import { queryDatabase } from "@/service/databaseService";

export default function ProjectList({ props, onProjectClick }) {
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
        if (blocks.results?.length > 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full px-2">
                    <div className="grid md:grid-cols-3 w-full h-full gap-4">
                        {blocks?.results?.slice(0, 6).map((block) => (
                            <Block key={block.id} pageId={block.id} onClick={onProjectClick} />
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full px-2">
                    <div className="grid md:grid-cols-3 w-full h-full gap-4">
                        {[...Array(3)].map((_, index) => (
                            <Block key={index} />
                        ))}
                    </div>
                </div>
            )
        }
    } else {
        if (blocks.results?.length > 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full px-5">
                    <div className="grid md:grid-cols-3 w-full h-full gap-4">
                        {blocks?.results?.map((block) => (
                            <Block key={block.id} pageId={block.id} onClick={onProjectClick} />
                        ))}
                    </div>
                </div>

            )
        } else {
            return (
                <div className="flex flex-col items-center justify-center w-full h-full px-5">
                    <div className="grid md:grid-cols-3 w-full h-full gap-4">
                        {[...Array(6)].map((_, index) => (
                            <Block key={index} className="animate-pulse cursor-wait" />
                        ))}
                    </div>
                </div>
            )
        }
    }
}