'use client'

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import StylezedTitle from "./StylezedTitle";

export default function NavBar() {
    const router = useRouter();

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 bg-[#1A1A1A]`}>
                <div className={`container mx-auto px-4 py-3 flex justify-around md:justify-between items-center `}>
                    <div className="text-lg font-bold hidden md:flex items-center space-x-4">
                        <div className={`transition-opacity duration-500`}>
                            <Image
                                src="/imgs/Titles/NavLogo.svg"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="w-35"
                            />
                        </div>
                    </div>
                    <div className={`flex space-x-4 transition-colors font-roboto uppercase font-medium duration-500 text-[#9D4DFF]`}>
                        <div onClick={() => router.push('/#sobre')} className="hover:text-[#5AFF15] cursor-pointer">Sobre Mim</div>
                        <div onClick={() => router.push('/#softSkills')} className="hover:text-[#5AFF15] cursor-pointer">Soft Skills</div>
                        <div onClick={() => router.push('/#experiencias')} className="hover:text-[#5AFF15] cursor-pointer">Tecnologias</div>
                        <div onClick={() => router.push('/portfolio')} className="hover:text-[#5AFF15] cursor-pointer">Portfólio</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}