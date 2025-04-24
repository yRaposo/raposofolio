'use client';
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Titulo1 from "@/../public/imgs/Titulo1.png";
import Titulo2 from "@/../public/imgs/Titulo2.png";
import Titulo3 from "@/../public/imgs/Titulo3.png";
import Titulo4 from "@/../public/imgs/Titulo4.png";
import Titulo5 from "@/../public/imgs/Titulo5.png";
import Titulo6 from "@/../public/imgs/Titulo6.png";
import Titulo7 from "@/../public/imgs/Titulo7.png";
import NavBar from "@/components/NavBar";

export default function Home() {

  function getRandomTitulo() {
    const titulos = [Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6, Titulo7];
    return titulos[Math.floor(Math.random() * titulos.length)];
  }

  const [randomTitulo, setRandomTitulo] = useState(getRandomTitulo());

  return (

    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-blue-500 via-blue-500 to-white">

      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-blue-500 via-blue-500 to-white">
        <NavBar />
        <div className="flex flex-row items-center justify-center min-h-screen min-w-screen"
          style={{
            backgroundImage: `url(/imgs/Eu.png)`, backgroundSize: 'cover', backgroundPosition: 'left 150px top 150px',
            backgroundRepeat: "no-repeat"
          }}>
          <div className="flex flex-col items-start justify-center min-w-screen pl-50">
            <Image
              src={randomTitulo}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
            />
            <p className="text-xl">Desenvolvedor Full-Stack • UI Designer • Editor de Video</p>
            <div>
              <image
                src="/imgs/Logo.png"
                alt="Logo"
                width={50}
                className="absolute bottom-0 right-0 mr-10 mb-10"
              />
            </div>
          </div>
        </div>

      </div>
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b bg-[#0F1020]">
          <h1 className="text-4xl font-bold mb-4 text-[#447EF2]">Sobre Mim</h1>
          <p className="text-lg text-center max-w-2xl text-white">
            Olá! Meu nome é [Seu Nome] e sou um desenvolvedor Full-Stack apaixonado por criar experiências digitais incríveis. Com habilidades em design de interface do usuário e edição de vídeo, estou sempre em busca de novos desafios e oportunidades para aprender e crescer na área de tecnologia.
          </p>
        </div>
    </div>

  );
}
