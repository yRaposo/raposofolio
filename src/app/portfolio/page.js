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
            <div className="pt-40 md:mt-0 flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-start justify-start w-full px-5">
                    <h1 className="text-6xl font-bold text-[#9D4DFF] mb-8 font-bebas">Meus Projetos</h1>
                </div>
                <ProjectList onProjectClick={handleProjectClick} />

            </div>
            <Modal isOpen={showModal} onClose={handleCloseModal}>
                <ProjectModal projectData={pageData} />
            </Modal>
        </div>
    );
}