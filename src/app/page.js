'use client';
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram, FaCog, FaPalette, FaLightbulb } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { MdGroups, MdMovie } from "react-icons/md";

import Titulo1 from "@/../public/imgs/Titles/Titulo1.png";
import Titulo2 from "@/../public/imgs/Titles/Titulo2.png";
import Titulo3 from "@/../public/imgs/Titles/Titulo3.png";
import Titulo4 from "@/../public/imgs/Titles/Titulo4.png";
import Titulo5 from "@/../public/imgs/Titles/Titulo5.png";
import Titulo6 from "@/../public/imgs/Titles/Titulo6.png";
import Titulo7 from "@/../public/imgs/Titles/Titulo7.png";
import EU2 from "@/../public/imgs/eu2.jpg";
import SobreMim from "@/../public/imgs/Topcs/SobreMim.png";
import Habilidades from "@/../public/imgs/Topcs/habilidades.png";
import NavBar from "@/components/NavBar";
import StylezedBtn from "@/components/StylezedBtn";

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
              className="mb-4"
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
            <div className="flex gap-4 mt-4">
              <StylezedBtn props={{ icon: <FaGithub size={25} />, bgColor: '#2b3137', textColor: 'white', borderColor: 'none' }} onClick={() => { }} />
              <StylezedBtn props={{ icon: <FaLinkedin size={25} />, bgColor: '#0a66c2', textColor: 'white', borderColor: 'none' }} onClick={() => { }} />
              <StylezedBtn props={{ icon: <FaDiscord size={25} />, bgColor: '#5865F2', textColor: 'white', borderColor: 'none' }} onClick={() => { }} />
              <StylezedBtn props={{ icon: <FaInstagram size={25} />, bgColor: '#C13584', textColor: 'white', borderColor: 'none' }} onClick={() => { }} />
            </div>
          </div>
        </div>
      </div>

      <div id="habilidades" className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-b bg-[#0F1020]">
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen px-30">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src={Habilidades}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
              className="mb-4"
            />
            <div className="grid grid-cols-2 gap-4">

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <CgScreen size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">Desenvolvimento Front-end</h1>
                  <p className="text-white">
                    Experiência prática com React Vite, Next.js e React Native, focando em performance, responsividade e boas práticas de desenvolvimento.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <FaCog size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">Noções de Back-end</h1>
                  <p className="text-white">
                    Atuação com Node.js e maior familiaridade com Java Spring Boot, contribuindo para aplicações web completas e bem estruturadas.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <FaPalette size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">UI Design</h1>
                  <p className="text-white">
                    Sólido domínio de Figma e Adobe XD, criando interfaces intuitivas, funcionais e visualmente agradáveis, sempre pensando na experiência do usuário.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <MdMovie size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">Edição de Vídeo</h1>
                  <p className="text-white">
                    Habilidade com Adobe Premiere, After Effects, Illustrator e Photoshop, trazendo criatividade e profissionalismo para projetos audiovisuais.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <FaLightbulb size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">Perfil Inovador</h1>
                  <p className="text-white">
                    Motivado por tecnologia e movido por inovação, sempre buscando novas ideias e soluções criativas para os desafios dos projetos.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] bg-[#0F1020] rounded-lg p-4">
                <div className="flex items-center justify-center mr-4 text-white">
                  <MdGroups size={48} />
                </div>
                <div>
                  <h1 className="text-2xl text-white font-bold">Espírito Colaborativo</h1>
                  <p className="text-white">
                    Aberto a feedbacks e trocas construtivas, com foco no crescimento coletivo e na construção de ambientes colaborativos e produtivos.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div >

  );
}
