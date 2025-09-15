'use client';
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdGroups, MdInterests, MdOutlineCampaign, MdOutlineElectricBolt, MdSearch } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

import NavBar from "@/components/NavBar";
import { getDatabase, queryDatabase } from "@/service/databaseService";
import ProjectList from "@/components/ProjectList";
import StrokeText from "@/components/StrokeText";
import HabilitCard from "@/components/HabilitCard";
import Modal from "@/components/Modal";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [blocks, setBlocks] = useState([]);
  const [pageData, setPageData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  // Função para abrir o modal com os dados do projeto
  const handleProjectClick = (projectData) => {
    setPageData(projectData);
    setShowModal(true);
  };

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
    <div className="flex flex-col items-center justify-center min-h-screen max-w-screen bg-[#1A1A1A]">
      <NavBar />

      {/* Hero Section */}

      {/* XL SIZE */}
      <section className="hidden xl:flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#447EF2] via-[#447EF2] to-[#F5F5F5] overflow-hidden">
        <div className="flex flex-row items-center justify-center min-h-screen w-full">
          <div className="flex flex-col items-start justify-center w-full pl-50">
            <div className="flex flex-row">
              <StrokeText text="RAPOSO" className="transform -translate-x-83" repeat={1} position="right" />
              <Image
                src="/imgs/Titles/Logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-100 mx-[-10]"
              />
              <StrokeText text="RAPOSO" className="transform -translate-x-[3px]" repeat={4} />
            </div>
            <p className="text-xl">
              Desenvolvedor Full Stack • UI Designer • Editor de Video
            </p>
          </div>
        </div>
        <div
          className="absolute right-0 bottom-0 top-0 w-full flex items-end justify-center"
          style={{
            backgroundImage: "url(/imgs/Eu.png)",
            backgroundSize: "cover",
            backgroundPosition: "50px 200px",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* LG SIZE */}
      <section className="hidden xl:hidden lg:flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#447EF2] via-[#447EF2] to-[#F5F5F5] overflow-hidden">
        <div className="flex flex-row items-center justify-center min-h-screen w-full">
          <div className="flex flex-col items-start justify-center w-full pl-50">
            <div className="flex flex-row">
              <StrokeText text="RAPOSO" className="transform -translate-x-83" repeat={1} position="right" />
              <Image
                src="/imgs/Titles/Logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-100 mx-[-10]"
              />
              <StrokeText text="RAPOSO" className="transform -translate-x-[3px]" repeat={4} />
            </div>
            <p className="text-xl">
              Desenvolvedor Full Stack • UI Designer • Editor de Video
            </p>
          </div>
        </div>
        <div
          className="absolute right-0 bottom-0 top-0 w-full flex items-end justify-center"
          style={{
            backgroundImage: "url(/imgs/Eu.png)",
            backgroundSize: "cover",
            backgroundPosition: "-200px 250px",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* MD SIZE */}
      <section className="lg:hidden xl:hidden flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-[#447EF2] via-[#447EF2] to-[#F5F5F5] overflow-hidden">
        <div className="flex flex-row items-start justify-center min-h-screen w-full">
          <div className="flex flex-col items-center w-full mt-34">
            <div className="flex flex-col items-center justify-center">
              <StrokeText text="RAPOSO" className="transform -translate-x-[0px] -translate-y-[510px]" repeat={4} vertical position="bottom" />
              <Image
                src="/imgs/Titles/Logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-94"
              />
              <StrokeText text="RAPOSO" className="transform -translate-x-[0px] -translate-y-[-33px]" repeat={20} vertical position="top" />
            </div>
          </div>
        </div>
        <div
          className="absolute right-0 bottom-0 top-0 left-0 w-full min-h-screen"
          style={{
            backgroundImage: "url(/imgs/Eu.png)",
            backgroundSize: "200% auto",
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* About Section */}
      <section className="flex flex-col items-start justify-center w-full pt-[160px] px-[20px] md:px-[64px]" id="sobre">
        <div className="flex flex-row items-start justify-center w-full">
          <div className="items-start justify-center h-full w-15">
            <h2 className="text-start text-6xl font-bebas text-[#9D4DFF] transform -rotate-270 -translate-x-[-50px] whitespace-nowrap origin-top-left">Sobre Mim</h2>
          </div>
          <div className="flex flex-col text-start text-[#F5F5F5] font-roboto text-md space-y-4">
            <p>
              Olá! Meu nome é João Raposo, estudante do 6° semestre de DSM e <strong>desenvolvedor full stack</strong>. Tenho paixão por tecnologia, design e inovação, e estou sempre em busca de <strong>aprendizado contínuo e desenvolvimento pessoal</strong>.
            </p>
            <p>
              Já participei de diversos projetos web e mobile, atuando tanto no front-end quanto no back-end. No front, trabalhei com <strong>React Vite, Next.js e React Native</strong>. No back, utilizei Node.js e principalmente <strong>Java Spring Boot</strong>, desenvolvendo soluções completas e escaláveis.
            </p>
            <p>
              Além do código, também tenho experiência como <strong>UI designer</strong>, criando interfaces funcionais e intuitivas em ferramentas como <strong>Figma e Adobe XD</strong>. Complementando, atuo como <strong>editor de vídeo</strong>, dominando softwares como Adobe Premiere, After Effects, Illustrator e Photoshop.
            </p>
            <p>
              Sou movido por <strong>inovação</strong> e gosto de trazer novas ideias para os projetos em que me envolvo. Acredito que <strong>criatividade, colaboração e feedbacks construtivos</strong> são fundamentais para crescer como profissional e para alcançar resultados de impacto.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-end w-full mt-3 gap-2">
          <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://www.linkedin.com/in/yrapos0', '_blank')}>
            <FaLinkedin size={40} />
          </button>
          <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://github.com/yRaposo', '_blank')}>
            <FaGithub size={40} />
          </button>
          <button className="flex items-center justify-around bg-none text-[#7a32cc] hover:text-[#f5f5f5] transition-colors cursor-pointer glitch-purple" onClick={() => window.open('https://www.instagram.com/yraposo_', '_blank')}>
            <FaInstagram size={40} />
          </button>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="flex flex-col-reverse lg:flex-row items-start justify-center w-full pt-[160px] px-[20px] md:px-[64px]" id="softSkills">
        <div className="flex w-full lg:w-fit h-fit items-center justify-center">
          <div className="h-fit w-fit lg:mr-10 border-1 border-[#f5f5f5] p-2 relative mt-10 lg:mt-0">
            <div className="h-fit w-fit relative"
              style={{
                backgroundImage: "url(/imgs/pattern.svg)",
                backgroundSize: "53px",   // Tamanho do padrão
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
              }}>
              <Image src="/imgs/EU2.png" alt="Eu" objectFit="cover" width={600} height={500} />
            </div>
            <div className="absolute bottom-0 right-0">
              <span className="font-timegoing text-white text-xl px-2 py-2">FRAGMENTS OF MYSELF</span>
            </div>
            <div className="absolute bottom-9 left-[-30] transform -rotate-270">
              <span className="text-white text-sm font-kode font-bold whitespace-nowrap">68.126.242</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center w-full">
          <div className="items-start justify-center h-full w-15">
            <h2 className="text-start text-6xl font-bebas text-[#9D4DFF] transform -rotate-270 -translate-x-[-50px] whitespace-nowrap origin-top-left">Soft skills</h2>
          </div>
          <div className="w-full flex flex-col gap-5">
            <HabilitCard title="Comunicação" text="Capacidade de transmitir ideias de forma clara, adaptando a linguagem ao público e garantindo entendimento mútuo." icon={<MdOutlineCampaign size={60} />} />
            <HabilitCard title="Trabalho em Equipe" text="Facilidade para colaborar com diferentes perfis, valorizando a troca de conhecimentos e construindo soluções em conjunto." icon={<MdGroups size={60} />} />
            <HabilitCard title="Pensamento Crítico" text="Habilidade de analisar cenários de forma lógica, questionar padrões e propor soluções mais eficientes." icon={<MdSearch size={60} />} />
            <HabilitCard title="Proatividade" text="Capacidade de tomar iniciativa, antecipar necessidades e agir sem esperar instruções diretas." icon={<MdOutlineElectricBolt size={60} />} />
            <HabilitCard title="Foco em Resultados" text="Organização e disciplina para direcionar esforços a fim de alcançar metas de forma consistente." icon={<TbTargetArrow size={60} />} />
            <HabilitCard title="Adaptabilidade" text="Flexibilidade para lidar com mudanças, aprender novas abordagens e se ajustar a diferentes contextos." icon={<MdInterests size={60} />} />
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="flex flex-col items-start justify-center w-full pt-[160px] px-[20px] md:px-[64px] mb-20" id="portfolio">
        <div className="flex flex-row items-start justify-center w-full">
          <div className="items-start justify-center h-full w-15">
            <h2 className="text-start text-6xl font-bebas text-[#9D4DFF] transform -rotate-270 -translate-x-[-50px] whitespace-nowrap origin-top-left">Portfólio</h2>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <ProjectList props={{ mini: true }} onProjectClick={handleProjectClick} />
            
            {/* Botão Ver Todos os Projetos */}
            <div className="flex justify-end w-full mt-8 mr-4">
              <button
                onClick={() => router.push('/portfolio')}
                className="flex items-center justify-center text-white font-bebas text-xl px-8 py-3 transition-all duration-300 hover:scale-105 glitch-blue border border-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-black"
              >
                VER TODOS OS PROJETOS
              </button>
            </div>
          </div>
        </div>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ProjectModal projectData={pageData} />
      </Modal>
    </div>

  );
}

{/* <ProjectList projects={blocks} /> */ }
