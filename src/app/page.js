'use client';
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram, FaCog, FaPalette, FaLightbulb } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { MdGroups, MdMovie } from "react-icons/md";
import { useRouter } from "next/navigation";

import Titulo1 from "@/../public/imgs/Titles/Titulo1.png";
import Titulo2 from "@/../public/imgs/Titles/Titulo2.png";
import Titulo3 from "@/../public/imgs/Titles/Titulo3.png";
import Titulo4 from "@/../public/imgs/Titles/Titulo4.png";
import Titulo5 from "@/../public/imgs/Titles/Titulo5.png";
import Titulo6 from "@/../public/imgs/Titles/Titulo6.png";
import Titulo7 from "@/../public/imgs/Titles/Titulo7.png";
import SobreMim from "@/../public/imgs/Topcs/SobreMim.png";
import Habilidades from "@/../public/imgs/Topcs/habilidades.png";
import Portfolio from "@/../public/imgs/Topcs/Portifolio.png";
import NavBar from "@/components/NavBar";
import StylezedBtn from "@/components/StylezedBtn";
import Card from "@/components/Card";
import { getBlockData } from "@/service/blockService";
import { getDatabase, queryDatabase } from "@/service/databaseService";
import Block from "@/components/Blocks";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  const [randomTitulo, setRandomTitulo] = useState(null);
  const [blocks, setBlocks] = useState([]);

  const router = useRouter();

  function getRandomTitulo() {
    const titulos = [Titulo1, Titulo2, Titulo3, Titulo4, Titulo5, Titulo6, Titulo7];
    return titulos[Math.floor(Math.random() * titulos.length)];
  }

  useEffect(() => {
    setRandomTitulo(getRandomTitulo()); // Define o título apenas no cliente
  }, []);

  useEffect(() => {
    queryDatabase('1ecb6aeff44b800c8fafc2ca2012ff37')
      .then((data) => {
        setBlocks(data);
        console.log("Blocos obtidos:", data);
      })
      .catch((error) => {
        console.error("Erro ao obter os blocos:", error);
      });
  }, []);


  return (

    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen bg-blue-500">

      <NavBar props={{onHome: true}}/>

      <div className="hidden lg:flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-500 to-white">
        <div className="flex flex-row items-center justify-center min-h-screen w-full"
          style={{
            backgroundImage: `url(/imgs/Eu.png)`, backgroundSize: 'cover', backgroundPosition: 'left 150px top 150px',
            backgroundRepeat: "no-repeat"
          }}>
          <div className="flex flex-col items-start justify-center w-full pl-50">
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

      <div className="hidden md:flex lg:hidden flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-500 to-white"
        style={{
          backgroundImage: `url(/imgs/Eu.png)`, backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-center min-w-screen mt-90">
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

      <div className="flex md:hidden flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-blue-500 via-blue-500 to-white"
        style={{
          backgroundImage: `url(/imgs/Eu.png)`, backgroundSize: '200%', backgroundPosition: 'center',
          backgroundPositionY: 'bottom',
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="flex flex-col items-center justify-center min-w-screen px-10">
            <Image
              src={randomTitulo}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
            />
          </div>
        </div>
      </div>

      <div id="sobre" className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b bg-[#0F1020]">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-10 md:px-30">
          <div className="mt-20 md:mt-0 flex flex-col items-center justify-center w-full">
            <Image
              src={SobreMim}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
              className="mb-4"
            />
            <p className="md:text-lg text-left text-white">
              Olá! Meu nome é <strong>João Raposo</strong>, estudante do <strong>6° Semestre</strong> de <strong>DSM</strong>, sou <strong>desenvolvedor front-end</strong> com noções de <strong>back-end</strong>, <strong>UI designer</strong> e <strong>editor de vídeo</strong>. Tenho uma verdadeira paixão por <strong>tecnologia</strong> e <strong>design</strong>, e estou sempre em busca de <strong>aprendizado constante</strong> e <strong>desenvolvimento pessoal</strong>.
              <br /><br />
              Já participei de diversos <strong>projetos web</strong>, aplicando minhas habilidades em <strong>front-end</strong> com tecnologias como <strong>React Vite</strong>, <strong>Next.js</strong> e <strong>React Native</strong>. No <strong>back-end</strong>, atuei com <strong>Node.js</strong> e, principalmente, com <strong>Java Spring Boot</strong>.
              <br /><br />
              Também tenho experiência sólida como <strong>designer de interfaces</strong>, utilizando ferramentas como <strong>Figma</strong> e <strong>Adobe XD</strong> para criar <strong>layouts intuitivos e funcionais</strong>. Como <strong>editor de vídeo</strong>, domino softwares como <strong>Adobe Premiere</strong>, <strong>After Effects</strong>, <strong>Illustrator</strong> e <strong>Photoshop</strong>.
              <br /><br />
              Sou movido por <strong>inovação</strong> e adoro trazer <strong>novas ideias</strong> aos projetos em que trabalho. Acredito que <strong>criatividade</strong> e <strong>colaboração</strong> são pilares essenciais para o sucesso. Estou sempre aberto a <strong>feedbacks</strong> e <strong>trocas construtivas</strong> — afinal, crescer profissionalmente é um caminho que se trilha junto!
            </p>
            <div className="flex gap-4 mt-4">
              <StylezedBtn props={{ icon: <FaGithub size={25} />, bgColor: '#2b3137', textColor: 'white', borderColor: 'none' }} onClick={() => window.open('https://github.com/yRaposo', '_blank')} />
              <StylezedBtn props={{ icon: <FaLinkedin size={25} />, bgColor: '#0a66c2', textColor: 'white', borderColor: 'none' }} onClick={() => window.open('https://www.linkedin.com/in/yrapos0/', '_blank')} />
              <StylezedBtn props={{ icon: <FaInstagram size={25} />, bgColor: '#C13584', textColor: 'white', borderColor: 'none' }} onClick={() => window.open('https://www.instagram.com/yraposo_/', '_blank')} />
            </div>
          </div>
        </div>
      </div>

      <div id="habilidades" className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b bg-[#0F1020]">
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-10 md:px-30 mt-20 md:mt-0">
          <div className="flex flex-col items-center justify-center w-full">
            <Image
              src={Habilidades}
              alt="Eu"
              width={500}
              onMouseOver={() => setRandomTitulo(getRandomTitulo())}
              onMouseOut={() => setRandomTitulo(getRandomTitulo())}
              className="mb-4"
            />
            <div className="grid lg:grid-cols-2 gap-4">

              <Card
                props={{
                  icon: <CgScreen size={48} />,
                  title: "Desenvolvimento Front-end",
                  description: "Experiência prática com React Vite, Next.js e React Native, focando em performance, responsividade e boas práticas de desenvolvimento."
                }}
              />

              <Card
                props={{
                  icon: <FaCog size={48} />,
                  title: "Noções de Back-end",
                  description: "Atuação com Node.js e maior familiaridade com Java Spring Boot, contribuindo para aplicações web completas e bem estruturadas."
                }}
              />

              <Card
                props={{
                  icon: <FaPalette size={48} />,
                  title: "UI Design",
                  description: "Sólido domínio de Figma e Adobe XD, criando interfaces intuitivas, funcionais e visualmente agradáveis, sempre pensando na experiência do usuário."
                }}
              />

              <Card
                props={{
                  icon: <MdMovie size={48} />,
                  title: "Edição de Vídeo",
                  description: "Habilidade com Adobe Premiere, After Effects, Illustrator e Photoshop, trazendo criatividade e profissionalismo para projetos audiovisuais."
                }}
              />

              <Card
                props={{
                  icon: <FaLightbulb size={48} />,
                  title: "Perfil Inovador",
                  description: "Motivado por tecnologia e movido por inovação, sempre buscando novas ideias e soluções criativas para os desafios dos projetos."
                }}
              />

              <Card
                props={{
                  icon: <MdGroups size={48} />,
                  title: "Espírito Colaborativo",
                  description: "Aberto a feedbacks e trocas construtivas, com foco no crescimento coletivo e na construção de ambientes colaborativos e produtivos."
                }}
              />

            </div>
          </div>
        </div>
      </div>

      <div id="portfolio" className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b bg-[#0F1020]">
        <div className="mt-20 md:mt-0 flex flex-col items-center justify-center">
          <Image
            src={Portfolio}
            alt="Eu"
            width={500}
            onMouseOver={() => setRandomTitulo(getRandomTitulo())}
            onMouseOut={() => setRandomTitulo(getRandomTitulo())}
            className="mb-4"
          />
          <ProjectList props={{
            mini: true
          }} />

          <div className="flex flex-col items-center justify-center my-10 px-40 py-5 border-2 border-[#2F195F] rounded-lg cursor-pointer hover:bg-[#2F195F] transition duration-300 ease-in-out transform hover:scale-105" onClick={() => router.push('/portfolio')}>
            <h1 className="text-2xl font-bold text-white">Ver Mais</h1>
          </div>

        </div>
      </div>

    </div >

  );
}
