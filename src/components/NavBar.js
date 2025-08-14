'use client'

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Titulo1 from "@/../public/imgs/Titles/Titulo1.png";
import Titulo2 from "@/../public/imgs/Titles/Titulo2.png";
import Titulo3 from "@/../public/imgs/Titles/Titulo3.png";
import Titulo4 from "@/../public/imgs/Titles/Titulo4.png";
import Titulo5 from "@/../public/imgs/Titles/Titulo5.png";
import Titulo6 from "@/../public/imgs/Titles/Titulo6.png";
import Titulo7 from "@/../public/imgs/Titles/Titulo7.png";
import { useRouter } from "next/navigation";


export default function NavBar({ props }) {
    const [randomTitulo, setRandomTitulo] = useState(getRandomTitulo());
    const [isAtTop, setIsAtTop] = useState(false);

    const router = useRouter();

    function getRandomTitulo() {
        const titulos = [Titulo2, Titulo3, Titulo4, Titulo6];
        return titulos[Math.floor(Math.random() * titulos.length)];
    }

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
                            <Image src={randomTitulo} alt="Random Titulo" width={250} />
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