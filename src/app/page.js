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
import EU2 from "@/../public/imgs/eu2.jpg";
import SobreMim from "@/../public/imgs/SobreMim.png";
import NavBar from "@/components/NavBar";

export default function Home() {

  function getRandomTitulo() {
    const titulos = [Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6, Titulo7];
    return titulos[Math.floor(Math.random() * titulos.length)];
  }

  const [randomTitulo, setRandomTitulo] = useState(getRandomTitulo());

  return (

    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-blue-500 via-blue-500 to-white">

      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b from-blue-500 via-blue-500 to-white">
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
            <p className="text-xl">Desenvolvedor Front-End • UI Designer • Editor de Video</p>
          </div>
        </div>
      </div>

      <div id="sobre" className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b bg-[#0F1020]">
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen px-30">

          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src={SobreMim}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
            />
            <p className="text-lg text-left text-white">
              Olá! Meu nome é <strong>João Raposo</strong>, sou <strong>desenvolvedor front-end</strong> com noções de <strong>back-end</strong>, <strong>UI designer</strong> e <strong>editor de vídeo</strong>. Tenho uma verdadeira paixão por <strong>tecnologia</strong> e <strong>design</strong>, e estou sempre em busca de <strong>aprendizado constante</strong> e <strong>desenvolvimento pessoal</strong>.
              <br /><br />
              Já participei de diversos <strong>projetos web</strong>, aplicando minhas habilidades em <strong>front-end</strong> com tecnologias como <strong>React Vite</strong>, <strong>Next.js</strong> e <strong>React Native</strong>. No <strong>back-end</strong>, atuei com <strong>Node.js</strong> e, principalmente, com <strong>Java Spring Boot</strong>.
              <br /><br />
              Também tenho experiência sólida como <strong>designer de interfaces</strong>, utilizando ferramentas como <strong>Figma</strong> e <strong>Adobe XD</strong> para criar <strong>layouts intuitivos e funcionais</strong>. Como <strong>editor de vídeo</strong>, domino softwares como <strong>Adobe Premiere</strong>, <strong>After Effects</strong>, <strong>Illustrator</strong> e <strong>Photoshop</strong>.
              <br /><br />
              Sou movido por <strong>inovação</strong> e adoro trazer <strong>novas ideias</strong> aos projetos em que trabalho. Acredito que <strong>criatividade</strong> e <strong>colaboração</strong> são pilares essenciais para o sucesso. Estou sempre aberto a <strong>feedbacks</strong> e <strong>trocas construtivas</strong> — afinal, crescer profissionalmente é um caminho que se trilha junto!
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}
