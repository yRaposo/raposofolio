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
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 bg-[#1A1A1A] flex justify-center items-center`}>
                <div className={`w-full mx-20px md:mx-[64px] py-3 flex flex-row justify-around md:justify-between items-center`}>
                    <div className='hidden md:flex'>
                        <Image
                            src="/imgs/Titles/NavLogo.svg"
                            alt="Logo"
                            width={32}
                            height={32}
                            className="w-35"
                        />
                    </div>
                    <div className={`flex space-x-4 transition-colors font-roboto uppercase font-medium duration-500 text-[#9D4DFF]`}>
                        <div onClick={() => router.push('/#sobre')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple">Sobre Mim</div>
                        <div onClick={() => router.push('/#softSkills')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple glitch-purple">Soft Skills</div>
                        {/* <div onClick={() => router.push('/#experiencias')} className="hover:text-[#f5f5f5] cursor-pointer">Tecnologias</div> */}
                        <div onClick={() => router.push('/portfolio')} className="hover:text-[#f5f5f5] cursor-pointer glitch-purple">Portfólio</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}