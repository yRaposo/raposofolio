'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaBehanceSquare } from 'react-icons/fa'
import ToolIcon from './toolIcon'
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import notionToMd from "@/utils/notionToMd"

export default function ProjectModal({ projectData }) {
    const [projectInfo, setProjectInfo] = useState({
        title: '',
        description: '',
        coverUrl: '',
        repositoryUrl: '',
        projectLink: '',
        berranceLink: '',
        tools: [],
        blockContent: ''
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (projectData) {
            const title = projectData?.properties?.Nome?.title?.[0]?.plain_text || '';
            const description = projectData?.properties?.Descrição?.rich_text?.[0]?.plain_text || '';
            const coverUrl = projectData?.cover?.file?.url || '';
            const repositoryUrl = projectData?.properties?.["Link do Repositório"]?.url || '';
            const projectLink = projectData?.properties?.["URL do Projeto"]?.url || '';
            const behanceLink = projectData?.properties?.["Behance do Projeto"]?.url || '';
            const tools = projectData?.properties?.["Ferramentas"]?.multi_select || [];

            setProjectInfo({
                title,
                description,
                coverUrl: coverUrl.trim(), // Remove espaços em branco
                repositoryUrl: repositoryUrl.trim(),
                projectLink: projectLink.trim(),
                behanceLink: behanceLink.trim(),
                tools,
                blockContent: ''
            })

            // Buscar o conteúdo dos blocos do Notion
            if (projectData.id) {
                fetchBlockContent(projectData.id)
            }
        }
    }, [projectData])

    const fetchBlockContent = async (pageId) => {
        setLoading(true)
        try {
            const markdownContent = await notionToMd(pageId)
            console.log('Conteúdo markdown recebido:', markdownContent) // Debug
            console.log('Tipo do conteúdo:', typeof markdownContent) // Debug tipo

            // Garantir que é uma string
            let contentString = ''
            if (typeof markdownContent === 'string') {
                contentString = markdownContent
            } else if (markdownContent && typeof markdownContent === 'object') {
                // Se for um objeto, tentar extrair a string
                contentString = markdownContent.parent || markdownContent.content || JSON.stringify(markdownContent) || ''
            }

            setProjectInfo(prev => ({
                ...prev,
                blockContent: contentString
            }))
        } catch (error) {
            console.error('Erro ao buscar conteúdo dos blocos:', error)
            setProjectInfo(prev => ({
                ...prev,
                blockContent: ''
            }))
        } finally {
            setLoading(false)
        }
    }

    if (!projectData) return null

    const { title, description, coverUrl, repositoryUrl, projectLink, behanceLink, tools, blockContent } = projectInfo

    return (
        <div className="flex flex-col space-y-6">
            {/* Header */}
            <div className="flex flex-col space-y-4">
                {/* Cover Image */}
                {coverUrl && coverUrl.trim() !== '' && (
                    <div className="relative w-full h-64 overflow-hidden">
                        <Image
                            src={coverUrl}
                            alt={title || 'Capa do projeto'}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-row">
                <div className="items-start justify-center h-full w-15">
                    <h1 className="text-start text-6xl font-bebas text-[#9D4DFF] transform -rotate-270 translate-x-12 whitespace-nowrap writing-mode-vertical-rl origin-top-left">{title}</h1>
                </div>

                <div className="flex flex-col space-y-4">
                    {/* Conteúdo dos Blocos do Notion */}
                    <div className="text-[#F5F5F5] font-roboto text-lg leading-relaxed">
                        {loading ? (
                            <div className="space-y-2">
                                <div className="flex w-full h-4 bg-[#51525E] animate-pulse rounded" />
                                <div className="flex w-3/4 h-4 bg-[#51525E] animate-pulse rounded" />
                                <div className="flex w-1/2 h-4 bg-[#51525E] animate-pulse rounded" />
                            </div>
                        ) : blockContent && typeof blockContent === 'string' && blockContent.trim() ? (
                            <div className="markdown-content">
                                <ReactMarkdown
                                    components={{
                                        div: ({ children }) => <div className="mb-4 flex flex-row">{children}</div>,
                                        h1: ({ children }) => <h1 className="text-xl md:text-2xl font-bebas text-[#447EF2] mb-4">{children}</h1>,
                                        h2: ({ children }) => <h2 className="text-lg md:text-xl font-bebas text-[#9D4DFF] mb-3">{children}</h2>,
                                        h3: ({ children }) => <h3 className="text-md md:text-lg font-bebas text-[#F5F5F5] mb-2">{children}</h3>,
                                        p: ({ children, node }) => {
                                            // Verifica se o parágrafo contém apenas uma imagem
                                            if (node && node.children && node.children.length === 1 && node.children[0].tagName === 'img') {
                                                return <>{children}</>;
                                            }

                                            // Verifica se contém elementos de bloco (div, iframe, etc.)
                                            const hasBlockElements = node && node.children && node.children.some(child =>
                                                child.tagName && ['div', 'iframe', 'video', 'embed'].includes(child.tagName)
                                            );

                                            // Se contém elementos de bloco, renderiza sem wrapper p
                                            if (hasBlockElements) {
                                                return <div className="mb-3">{children}</div>;
                                            }

                                            // Para texto normal, usa o parágrafo
                                            return <p className="text-sm md:text-lg mb-3 text-[#F5F5F5]">{children}</p>;
                                        },
                                        ul: ({ children, node }) => {
                                            // Verifica se a lista contém elementos de bloco (imagens, vídeos, etc.)
                                            const hasBlockElements = node && node.children && node.children.some(child => 
                                                child.children && child.children.some(grandChild => 
                                                    grandChild.tagName && ['img', 'div', 'iframe', 'video'].includes(grandChild.tagName)
                                                )
                                            );
                                            
                                            return (
                                                <ul className={`list-disc mb-3 text-[#F5F5F5] ${
                                                    hasBlockElements 
                                                        ? 'list-none space-y-4 ml-0' 
                                                        : 'list-inside space-y-1 text-sm md:text-lg ml-4'
                                                }`}>
                                                    {children}
                                                </ul>
                                            );
                                        },
                                        ol: ({ children, node }) => {
                                            // Verifica se a lista contém elementos de bloco
                                            const hasBlockElements = node && node.children && node.children.some(child => 
                                                child.children && child.children.some(grandChild => 
                                                    grandChild.tagName && ['img', 'div', 'iframe', 'video'].includes(grandChild.tagName)
                                                )
                                            );
                                            
                                            return (
                                                <ol className={`list-decimal mb-3 text-[#F5F5F5] ${
                                                    hasBlockElements 
                                                        ? 'list-none space-y-4 ml-0' 
                                                        : 'list-inside space-y-1 text-sm md:text-lg ml-4'
                                                }`}>
                                                    {children}
                                                </ol>
                                            );
                                        },
                                        li: ({ children, node }) => {
                                            // Verifica se o item da lista contém elementos de bloco
                                            const hasBlockElements = node && node.children && node.children.some(child => 
                                                child.tagName && ['img', 'div', 'iframe', 'video', 'ul', 'ol'].includes(child.tagName)
                                            );
                                            
                                            if (hasBlockElements) {
                                                return (
                                                    <li className="mb-4 border-l-2 border-[#447EF2] pl-4">
                                                        <div className="flex flex-col space-y-2">
                                                            {children}
                                                        </div>
                                                    </li>
                                                );
                                            }
                                            
                                            // Para itens de lista simples
                                            return <li className="text-sm md:text-lg">{children}</li>;
                                        },
                                        code: ({ children }) => <code className="bg-[#2A2A2A] text-[#77ff00] px-2 py-1 rounded text-sm">{children}</code>,
                                        pre: ({ children }) => <pre className="bg-[#2A2A2A] p-4 rounded overflow-x-auto mb-3">{children}</pre>,
                                        blockquote: ({ children }) => <blockquote className="border-l-4 border-[#447EF2] pl-4 italic text-[#B0B0B0] mb-3">{children}</blockquote>,
                                        strong: ({ children }) => <strong className="text-[#447EF2] font-bold">{children}</strong>,
                                        em: ({ children }) => <em className="text-[#9D4DFF] italic">{children}</em>,
                                        a: ({ href, children }) => {
                                            if (!href || href.trim() === '') {
                                                return <span className="text-[#F5F5F5]">{children}</span>;
                                            }
                                            return (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#447EF2] hover:text-[#9D4DFF] underline transition-colors"
                                                >
                                                    {children}
                                                </a>
                                            );
                                        },
                                        img: ({ src, alt }) => {
                                            if (!src || src.trim() === '') {
                                                return null;
                                            }

                                            return (
                                                <Image
                                                    src={src}
                                                    alt={alt || 'Imagem do projeto'}
                                                    width={800}
                                                    height={400}
                                                    className="object-cover w-full h-auto mb-4"
                                                />
                                            );
                                        },
                                        iframe: ({ src, width, height, ...props }) => {
                                            if (!src || src.trim() === '') {
                                                return null;
                                            }

                                            return (
                                                <div className="mb-6">
                                                    <div className="relative w-full overflow-hidden" style={{ height: '320px', maxHeight: '320px' }}>
                                                        <iframe
                                                            src={src}
                                                            width="100%"
                                                            frameBorder="0"
                                                            allowFullScreen
                                                            className="w-full"
                                                            style={{ height: '320px', maxHeight: '320px' }}
                                                            {...props}
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        },
                                        div: ({ className, children, ...props }) => {
                                            if (className === 'video-embed') {
                                                return (
                                                    <div className="mb-6 overflow-hidden relative w-full" style={{ height: '320px', maxHeight: '320px' }} {...props}>
                                                        {children}
                                                    </div>
                                                );
                                            }
                                            if (className === 'embed-container') {
                                                return (
                                                    <div className="my-6 rounded-lg overflow-hidden border border-[#444]" {...props}>
                                                        {children}
                                                    </div>
                                                );
                                            }
                                            return <div className={className} {...props}>{children}</div>;
                                        }
                                    }}
                                    rehypePlugins={[rehypeRaw]}
                                    remarkPlugins={[]}
                                >
                                    {blockContent}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <p className="text-[#B0B0B0] italic">Nenhum conteúdo adicional disponível.</p>
                        )}
                    </div>

                    {/* Tools */}
                    {tools && tools.length > 0 && (
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-xl font-bebas text-[#447EF2]">Tecnologias Utilizadas</h3>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, index) => (
                                    <div key={index} className="flex items-center space-x-2 bg-[#2A2A2A] px-3 py-2">
                                        <ToolIcon toolName={tool.name} />
                                        <span className="text-[#F5F5F5] text-sm">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0 pt-4">
                        {repositoryUrl && (
                            <button
                                onClick={() => window.open(repositoryUrl, '_blank')}
                                className="flex items-center space-x-2 bg-[#447EF2] hover:bg-[#3366CC] text-white px-4 py-2 transition-colors glitch-purple"
                            >
                                <FaGithub size={20} />
                                <span>Ver Repositório</span>
                            </button>
                        )}

                        {projectLink && (
                            <button
                                onClick={() => window.open(projectLink, '_blank')}
                                className="flex items-center space-x-2 bg-[#447EF2] hover:bg-[#3366CC] text-white px-4 py-2 transition-colors glitch-purple"
                            >
                                <FaExternalLinkAlt size={16} />
                                <span>Ver Projeto</span>
                            </button>
                        )}
                        {behanceLink && (
                            <button
                                onClick={() => window.open(projectLink, '_blank')}
                                className="flex items-center space-x-2 bg-[#447EF2] hover:bg-[#3366CC] text-white px-4 py-2 transition-colors glitch-purple"
                            >
                                <FaBehanceSquare size={16} />
                                <span>Ver Behance</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}