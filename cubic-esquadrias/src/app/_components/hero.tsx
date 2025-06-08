'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <section className="relative w-full h-[60vh] md:h-[70vh]">
            {/* Imagem de fundo */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src="/Hero.jpg"
                    alt="Imagem de fundo"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    data-aos="zoom-out"
                    data-aos-delay="100"
                />
            </div>

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-6 lg:px-8">
                <div
                    className="max-w-2xl text-white space-y-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        data-aos="fade-right"
                        data-aos-delay="500"
                    >
                        Soluções em Esquadrias de Alta Qualidade
                    </h1>
                    <p
                        className="text-lg md:text-xl opacity-90 max-w-lg"
                        data-aos="fade-right"
                        data-aos-delay="700"
                    >
                        Projetos personalizados e instalações profissionais para seu projeto
                    </p>
                    <a
                        href="https://wa.me/5561994258350?text=Olá, vim pelo site e gostaria de solicitar um orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <WhatsappLogoIcon className="w-5 h-5" />
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </section>
    )
}