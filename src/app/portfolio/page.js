'use client';
import { useState } from "react";
import Image from "next/image";
import ProjectList from "@/components/ProjectList";
import PortfolioIMG from "@/../public/imgs/Topcs/Portifolio.png";
import NavBar from "@/components/NavBar";

export default function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b bg-[#0F1020]">
            <NavBar props={{ onHome: false }} />
            <div className="pt-40 md:mt-0 flex flex-col items-center justify-center">
                <Image
                    src={PortfolioIMG}
                    alt="Eu"
                    width={500}
                    onMouseOver={() => setRandomTitulo(getRandomTitulo())}
                    onMouseOut={() => setRandomTitulo(getRandomTitulo())}
                    className="mb-4"
                />
                <ProjectList props={{
                }} />

            </div>
        </div>
    );
}