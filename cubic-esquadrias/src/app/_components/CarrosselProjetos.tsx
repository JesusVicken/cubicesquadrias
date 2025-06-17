'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const imagens = [
    '/sauna.jpg',
    '/projeto2.jpg',
    '/projeto3.jpg',
    '/projeto4.jpg',
    '/projeto5.jpg',
    '/projeto6.jpg',
    '/projeto7.jpg',
    '/projeto8.jpg',
    '/projeto9.jpg',
    '/projeto10.jpg',
]

export default function CarrosselProjetos() {
    const [activeIndex, setActiveIndex] = useState(0)
    const intervaloRef = useRef<NodeJS.Timeout | null>(null)

    const iniciarScroll = () => {
        intervaloRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % (imagens.length - 3))
        }, 3000)
    }

    const pararScroll = () => {
        if (intervaloRef.current) {
            clearInterval(intervaloRef.current)
            intervaloRef.current = null
        }
    }

    const nextSlide = () => {
        setActiveIndex(prev => (prev + 1) % (imagens.length - 3))
        resetInterval()
    }

    const prevSlide = () => {
        setActiveIndex(prev => (prev - 1 + imagens.length - 3) % (imagens.length - 3))
        resetInterval()
    }

    const resetInterval = () => {
        pararScroll()
        iniciarScroll()
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
        iniciarScroll()
        return () => pararScroll()
    }, [])

    const getVisibleImages = () => {
        const visible = []
        for (let i = 0; i < 4; i++) {
            const index = (activeIndex + i) % imagens.length
            visible.push(imagens[index])
        }
        return visible
    }

    const visibleImages = getVisibleImages()

    return (
        <div className="w-full relative group">
            {/* Botão Anterior */}
            <button
                onClick={prevSlide}
                className="absolute left-2 -translate-y-1/2 top-1/2 z-10 
                   bg-white/80 p-2 rounded-full shadow-md hover:bg-white 
                   transition-all opacity-0 group-hover:opacity-100 
                   md:-left-10"
                aria-label="Projeto anterior"
            >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            {/* Botão Próximo */}
            <button
                onClick={nextSlide}
                className="absolute right-2 -translate-y-1/2 top-1/2 z-10 
                   bg-white/80 p-2 rounded-full shadow-md hover:bg-white 
                   transition-all opacity-0 group-hover:opacity-100 
                   md:-right-10"
                aria-label="Próximo projeto"
            >
                <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Grid de imagens */}
            <div
                className="grid grid-cols-2 gap-4 h-[500px] mb-8"
                onMouseEnter={pararScroll}
                onMouseLeave={iniciarScroll}
            >
                {visibleImages.map((src, i) => (
                    <div
                        key={`grid-${i}`}
                        className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        data-aos="fade-up"
                        data-aos-delay={i * 100}
                    >
                        <Image
                            src={src}
                            alt={`Projeto ${i + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            quality={100}
                        />
                    </div>
                ))}
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: imagens.length - 3 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setActiveIndex(i)
                            resetInterval()
                        }}
                        className={`h-2 w-2 rounded-full transition-all ${i === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                            }`}
                        aria-label={`Ir para o projeto ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
