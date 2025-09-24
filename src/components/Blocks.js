'use client'

import { getPageData } from "@/service/pageService"
import notionToMd from "@/utils/notionToMd"
import Image from "next/image"
import { use, useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import StylezedBtn2 from "./StylezedBtn2"
import ToolIcon from "./toolIcon"

/**
 * Componente que renderiza um bloco de projeto com dados do Notion
 * @param {string} pageId - ID da página do Notion a ser carregada
 */
export default function Block({ pageId, onClick }) {
    // Estados para gerenciar dados da página, blocos de conteúdo, carregamento e erros
    const [pageData, setPageData] = useState([])
    const [blockData, setBlockData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isHovered, setIsHovered] = useState(false)

    // Efeito para carregar os dados básicos da página
    useEffect(() => {
        if (!pageId) return

        const fetchPageData = async () => {
            setLoading(true)
            setError(null)

            try {
                const data = await getPageData(pageId)
                console.log('Page data:', data)
                setPageData(data)
            } catch (error) {
                console.error('Erro ao carregar dados da página:', error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPageData()
    }, [pageId])

    // Efeito para converter e carregar o conteúdo markdown da página
    useEffect(() => {
        if (!pageId) return

        const fetchBlockData = async () => {
            setLoading(true)
            setError(null)

            try {
                const data = await notionToMd(pageId)
                console.log('Block data:', data)
                setBlockData(data)
            } catch (error) {
                console.error('Erro ao carregar dados dos blocos:', error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlockData()
    }, [pageId])

    // Função para abrir o modal
    const handleRepositoryClick = () => {
        if (onClick) {
            onClick(pageData) // Passa os dados do projeto para o componente pai
        }
    }

    // Função para renderizar a imagem de capa ou placeholder
    const renderCoverImage = () => {
        const coverUrl = pageData?.cover?.file?.url
        const iconEmoji = pageData?.icon?.emoji

        if (coverUrl || iconEmoji) {
            return (
                <Image
                    src={coverUrl || iconEmoji || "/imgs/fallbackIMG.png"}
                    alt="Capa do projeto"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                />
            )
        }

        // Placeholder de carregamento
        return <div className="flex w-full h-48 bg-[#51525E] animate-pulse" />
    }

    // Função para renderizar o título do projeto
    const renderProjectTitle = () => {
        const title = pageData?.properties?.Nome?.title?.[0]?.plain_text

        if (title) {
            return <h1 className="text-start text-6xl font-bebas text-[#447EF2] transform -rotate-270 translate-x-12 whitespace-nowrap writing-mode-vertical-rl origin-top-left">{title}</h1>
        }

        // Placeholder de carregamento
        return <div className="flex w-9/10 h-70 bg-[#51525E] animate-pulse" />
    }

    // Função para renderizar o conteúdo markdown
    const renderMarkdownContent = () => {
        const description = pageData?.properties?.Descrição?.rich_text?.[0]?.plain_text
        if (description === undefined) {
            return (
                <div className="space-y-1">
                    <div className="flex w-full h-7 bg-[#51525E] animate-pulse" />
                    <div className="flex w-full h-7 bg-[#51525E] animate-pulse" />
                    <div className="flex w-4/5 h-7 bg-[#51525E] animate-pulse" />
                    <div className="flex w-1/2 h-7 bg-[#51525E] animate-pulse" />
                </div>
            )
        }

        // Função para truncar baseado no tamanho da tela (usando CSS breakpoints)
        const getTruncatedText = () => {
            if (typeof window === 'undefined') return description

            const width = window.innerWidth
            let maxChars

            if (width < 435) maxChars = 400
            else if (width < 640) maxChars = 700  // xs
            else if (width < 768) maxChars = 700  // sm
            else if (width < 1422) maxChars = 180 // md
            else if (width < 1280) maxChars = 350 // lg
            else maxChars = 500                 // xl

            return description.length > maxChars
                ? description.substring(0, maxChars).trim() + "..."
                : description
        }

        return (
            <div className=" text-white leading-bre text-wrap mr-2 overflow-hidden
            text-sm leading-tight h-full
            sm:text-base sm:leading-normal
            md:text-base md:leading-normal
            lg:text-base lg:leading-relaxed
            xl:text-base xl:leading-relaxed">
                {getTruncatedText()}
            </div>
        )
    }

    const renderToolIcon = () => {
        const toolName = pageData?.properties?.["Ferramentas"]?.multi_select
        if (toolName) {
            return (
                <div className="space-x-1 flex flex-row">
                    {toolName.map((tool, index) => (
                        <ToolIcon key={index} toolName={tool.name} />
                    ))}
                </div>
            )
        } else {
            return (
                <div className="space-x-1 flex flex-row">
                    <div className="flex h-7 w-7 bg-[#51525E] animate-pulse" />
                    <div className="flex h-7 w-7 bg-[#51525E] animate-pulse" />
                    <div className="flex h-7 w-7 bg-[#51525E] animate-pulse" />
                    <div className="flex h-7 w-7 bg-[#51525E] animate-pulse" />
                </div>
            )
        }
    }

    const renderHoverText = () => {
        if (isHovered) {
            return (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#77ff00] font-timegoing cursor-pointer select-none glitch-purple-initial w-100 z-50">
                    <Image src="/imgs/verProjeto.svg"
                        alt="Ver Projeto"
                        width={900}
                        height={900}
                        objectFit="contain"
                        className="w-full h-full object-contain"
                    />
                </div>
            )
        }
    }

    // Renderização do componente principal
    return (
        <div
            className="flex flex-col items-start justify-center bg-[#1A1A1A] border-1 border-[#F5F5F5] p-1  cursor-pointer w-full h-[600px] transform-flat hover:scale-105 hover:translate-z-3 transition duration-300 hover:shadow-xl hover:shadow-[#F5F5F5] bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A] via-80% hover:to-[#F5F5F5]"
            onClick={handleRepositoryClick}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
        >
            <div className="flex flex-col items-center justify-start w-full h-full">
                {/* Seção da imagem de capa */}
                {renderCoverImage()}

                {/* Seção do conteúdo principal */}
                <div className="flex flex-row items-start justify-center h-full w-full pt-2 pb-1">
                    <div className="items-start justify-center h-full w-15">
                        {renderProjectTitle()}
                    </div>
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col text-start font-roboto text-md space-y-4 w-full h-full">
                            {renderMarkdownContent()}
                        </div>
                        <div className="flex items-end justify-end w-full h-full pt-4">
                            {renderToolIcon()}
                        </div>
                    </div>
                </div>
                {/* texto de hover estilizado */}
                {renderHoverText()}
            </div>
        </div>
    )
}