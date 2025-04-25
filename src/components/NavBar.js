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


export default function NavBar() {
    const [randomTitulo, setRandomTitulo] = useState(getRandomTitulo());
    const [isAtTop, setIsAtTop] = useState(false);

    function getRandomTitulo() {
        const titulos = [Titulo2, Titulo3, Titulo4, Titulo6];
        return titulos[Math.floor(Math.random() * titulos.length)];
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY > 300); // Verifica se está no topo
        };

        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${isAtTop === true ? 'bg-[#0F1020]' : 'bg-none'}`}>
                <div className={`container mx-auto px-4 py-3 flex justify-between items-center `}>
                    <div className="text-lg font-bold">
                        <div className={`transition-opacity duration-500 ${isAtTop === true ? 'opacity-100' : 'opacity-0'}`}>
                            <Image src={randomTitulo} alt="Random Titulo" width={250} />
                        </div>
                    </div>
                    <div className={`flex space-x-4 transition-colors font-medium duration-500 ${isAtTop === true ? 'text-white' : 'text-black'}`}>
                        <a href="#sobre" className="hover:text-[#5AFF15]">Sobre Mim</a>
                        <a href="#habilidades" className="hover:text-[#5AFF15]">Habilidades</a>
                        <a href="#curriculo" className="hover:text-[#5AFF15]">Portfólio</a>
                    </div>
                </div>
            </nav>
            <div className="pt-16">

            </div>
        </div>
    )
}