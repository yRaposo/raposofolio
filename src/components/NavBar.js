'use client'

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StylezedTitle from "./StylezedTitle";


export default function NavBar({ props }) {
    const [isAtTop, setIsAtTop] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (props.onHome) {
            handleScroll();

            window.addEventListener("scroll", handleScroll);
        } else {
            setIsAtTop(true); // Se não estiver na home, defina como true
        }
    }, [props.onHome]);

    const handleScroll = () => {
            setIsAtTop(window.scrollY > 300); // Verifica se está no topo
    };

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isAtTop === true ? 'bg-[#0F1020]' : 'bg-none'}`}>
                <div className={`container mx-auto px-4 py-3 flex justify-around md:justify-between items-center `}>
                    <div className="text-lg font-bold hidden md:flex items-center space-x-4">
                        <div className={`transition-opacity duration-500 ${isAtTop === true ? 'opacity-100' : 'opacity-0'}`}>
                            <StylezedTitle titulo1="Título 1" titulo2="Título 2" />
                        </div>
                    </div>
                    <div className={`flex space-x-4 transition-colors font-medium duration-500 ${isAtTop === true ? 'text-white' : 'text-black'}`}>
                        <div onClick={() => router.push('/#sobre')} className="hover:text-[#5AFF15] cursor-pointer">Sobre Mim</div>
                        <div onClick={() => router.push('/#habilidades')} className="hover:text-[#5AFF15] cursor-pointer">Habilidades</div>
                        <div onClick={() => router.push('/portfolio')} className="hover:text-[#5AFF15] cursor-pointer">Portfólio</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}