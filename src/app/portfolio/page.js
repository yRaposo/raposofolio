'use client';
import { useState } from "react";
import Image from "next/image";
import ProjectList from "@/components/ProjectList";
import NavBar from "@/components/NavBar";
import Modal from "@/components/Modal";
import ProjectModal from "@/components/ProjectModal";

export default function Portfolio() {
    const [showModal, setShowModal] = useState(false);
    const [pageData, setPageData] = useState(null);

    const handleProjectClick = (projectData) => {
        console.log('Dados do projeto recebidos:', projectData); // Debug
        setPageData(projectData); // Define os dados do projeto
        setShowModal(true); // Abre o modal
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setPageData(null); // Limpa os dados quando fecha o modal
    }

    return (
        <div id="portfolio" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b bg-[#1A1A1A]">
            <NavBar props={{ onHome: false }} />
            <section className="flex flex-col items-start justify-center w-full pt-[160px] px-[20px] md:px-[64px] mb-20" id="portfolio">
                <div className="flex flex-row items-start justify-center w-full">
                    <div className="items-start justify-center h-full w-15">
                        <h2 className="text-start text-6xl font-bebas text-[#9D4DFF] transform -rotate-270 -translate-x-[-50px] whitespace-nowrap origin-top-left">Meus Projetos</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <ProjectList props={{ mini: false }} onProjectClick={handleProjectClick} />
                    </div>
                </div>
            </section>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <ProjectModal projectData={pageData} />
            </Modal>
        </div>
    );
}