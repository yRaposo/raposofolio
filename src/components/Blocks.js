'use client'

// Removed unused import
import { getPageData } from "@/service/pageService"
import notionToMd from "@/utils/notionToMd"
import Image from "next/image"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import fallbackIMG from "@/../public/imgs/fallbackIMG.png";
// Removed unused import
import StylezedBtn2 from "./StylezedBtn2"

export default function Block({ pageId }) {

    const [pageData, setPageData] = useState([])
    const [blockData, setBlockData] = useState([])
    const [loading, setLoading] = useState(false)
    // Removed unused state variable
    // Removed unused state variable

    useEffect(() => {
        setLoading(true)
        getPageData(pageId)
            .then((data) => {
                console.log('Page data:', data)
                setPageData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [pageId])

    useEffect(() => {
        setLoading(true)
        notionToMd(pageId)
            .then((data) => {
                console.log('Block data:', data)
                setBlockData(data)
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [pageId])

    return (
        <div className="flex flex-col items-center justify-center bg-[#0F1020] border-2 border-[#2F195F] rounded-lg m-4 overflow-hidden max-w-md" onClick={() => pageData?.properties?.["Link do Repositório"]?.url && window.open(pageData.properties["Link do Repositório"].url, "_blank")}>
            <div className="flex flex-col items-center justify-center w-full h-full">
                {
                    pageData?.cover?.file?.url || pageData?.cover?.file?.url || pageData?.icon?.emoji ?
                        (
                            <Image
                                src={pageData?.cover?.file?.url || pageData?.cover?.file?.url || pageData?.icon?.emoji || fallbackIMG}
                                alt="Cover"
                                width={500}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                        ) : (
                            <div className="flex w-full h-48 bg-[#51525E] rounded-lg animate-pulse"></div>
                        )
                }
                <div className="flex flex-col items-start justify-center w-full h-full rounded-sm shadow-lg p-4">
                    {
                        pageData?.properties?.Nome?.title[0]?.plain_text ? (
                            <h1 className="text-2xl font-bold text-white">{pageData?.properties?.Nome?.title[0]?.plain_text}</h1>
                        ) : (
                            <div className="flex w-full h-10 bg-[#51525E] rounded-sm animate-pulse"></div>
                        )
                    }
                    {
                        blockData ? (
                            <div className="flex flex-col items-start justify-center w-full h-full">
                                <div className="markdown-container text-white text-wrap truncate">
                                    <ReactMarkdown>
                                        {blockData?.parent?.length > 200 ? `${blockData.parent.substring(0, 200)}...` : blockData.parent}
                                    </ReactMarkdown>
                                </div>
                                <div className="flex flex-col items-center justify-between w-full mt-1">
                                    {
                                        pageData?.properties?.["Link do Repositório"]?.url ? (
                                            <StylezedBtn2
                                                props={{
                                                    text: "Ver Repositório",
                                                }}
                                                onClick={() => window.open(pageData?.properties["Link do Repositório"]?.url, "_blank")}
                                            />
                                        ) : (
                                            <div className="flex w-full h-10 bg-[#51525E] rounded-sm animate-pulse"></div>
                                        )
                                    }
                                </div>
                            </div>
                        ) : (
                            <div className="flex w-full h-10 bg-[#51525E] rounded-sm animate-pulse"></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}