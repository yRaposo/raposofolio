'use client';

import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full flex flex-row bg-[#1A1A1A] text-[#F5F5F5] py-10 text-center border-t border-[#f5f5f5]">
            <div className="w-full mx-10 md:mx-[64px] flex flex-col md:flex-row justify-around md:justify-between items-center">
                <div className="flex md:flex-col w-full h-full">
                    <div className='flex flex-col'>
                        <Image
                            src="/imgs/Titles/NavLogo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-35"
                        />
                        <div className={`flex flex-col text-left transition-colors font-roboto uppercase font-medium duration-500 text-[#9D4DFF] mt-4`}>
                            <div onClick={() => router.push('/#sobre')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple">
                                Sobre Mim
                            </div>
                            <div onClick={() => router.push('/#softSkills')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple glitch-purple">
                                Soft Skills
                            </div>
                            {/* <div onClick={() => router.push('/#experiencias')} className="hover:text-[#f5f5f5] cursor-pointer">Tecnologias</div> */}
                            <div onClick={() => router.push('/portfolio')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple">
                                Portfólio
                            </div>
                        </div>
                        <div className="hidden md:flex text-left mt-4 text-sm">
                            © 2025 yRaposo — Todos os direitos reservados
                        </div>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-col w-full h-full">
                    <div className="md:hidden flex text-left mt-4 text-sm">
                        © 2025 yRaposo — Todos os direitos reservados
                    </div>
                    <div className="flex mt-4 md:mt-0 md:justify-end w-full">
                        <button
                            className="flex items-center justify-center text-white font-bebas text-xl px-8 py-3 transition-all duration-300 hover:scale-105 glitch-blue border border-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-black"
                        >
                            Meu Curriculo
                        </button>
                    </div>
                    <div className="w-full mt-4 md:justify-end flex flex-col h-full">
                        <h3 className="text-2xl uppercase text-[#447ef2] text-left md:text-right">Redes Sociais</h3>
                        <div className="flex flex-row w-full md:justify-end gap-2">
                            <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://www.linkedin.com/in/yrapos0', '_blank')}>
                                <FaLinkedin size={34} />
                            </button>
                            <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://github.com/yRaposo', '_blank')}>
                                <FaGithub size={34} />
                            </button>
                            <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://www.instagram.com/yraposo_', '_blank')}>
                                <FaInstagram size={34} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}