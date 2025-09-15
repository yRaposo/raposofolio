'use client'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

export default function Modal({ isOpen, onClose, children }) {
    // Fecha o modal quando pressiona ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEsc)
            document.body.style.overflow = 'hidden' // Impede scroll do body
        }

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-transparent backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-[#1A1A1A] border border-[#F5F5F5] h-[90vh] max-h-[90vh] w-full mx-10 my-4 flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-[-20] z-10 text-[#F5F5F5] hover:text-[#9D4DFF] transition-colors glitch-purple"
                >
                    <IoClose size={32} />
                </button>

                {/* Modal Body */}
                <div className="flex-1 overflow-y-auto p-6 pt-16">
                    {children}
                </div>
            </div>
        </div>
    )
}