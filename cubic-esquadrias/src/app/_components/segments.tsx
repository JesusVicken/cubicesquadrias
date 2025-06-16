'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Service = {
    title: string
    desc: string
    image: string
}

const services: Service[] = [
    {
        title: 'Portas e Janelas',
        desc: 'Fabricamos portas em ACM, vidro, alumínio dos tipos de deslizantes, pivotantes e camarão.',
        image: '/porta.janela.jpg',
    },
    // {
    //     title: 'Brise camarão em ripado',
    //     desc: 'Trabalhamos com diversos materiais, inox, alumínio, ripado de metal e vidro.',
    //     image: '/brise.jpg',
    // },
    {
        title: 'Pele de Vidro',
        desc: 'Apresenta como uma opção prática, simples e bonita para fachada de sua casa ou prédio.',
        image: '/pelevidro.jpg',
    },
    {
        title: 'Pele de Vidro Espelhada',
        desc: 'Pele de vidro espelhada com sobreposição em chapa metálica recortada.',
        image: '/pele-vidro.jpeg',
    },
    // {
    //     title: 'Spiders',
    //     desc: 'Uma ótima opção para acabamento dos brises, ripados e spiders.',
    //     image: '/spider.jpg',
    // },
    {
        title: 'Sauna',
        desc: 'Valorize cada espaço em seu lar ou empreendimento, com uma ótima vantagem à luminosidade.',
        image: '/sauna.jpg',
    },
    {
        title: 'Portas e Janelas de Vidro',
        desc: 'Versatilidade e economia, fornecemos portas e janelas de vidro com qualidade e garantia.',
        image: '/vidros.jpg',
    },
    {
        title: 'Clarabóia',
        desc: 'Garanta ventilação e luminosidade em pequenos espaços com a versatilidade e praticidade da clarabóia.',
        image: '/claraboia.jpg',
    },
]

export default function Segments() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center',
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    return (
        <section className="py-20 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-4 text-black">Segmentos</h2>
                    <p className="text-gray-700 max-w-2xl mx-auto text-base">
                        Conheça os principais serviços e soluções que oferecemos, com qualidade, tecnologia e sofisticação.
                    </p>
                </div>

                <div className="relative" data-aos="fade-up" data-aos-delay="200">
                    {/* Navegação fora das imagens - visível em todas as telas */}
                    <button
                        onClick={scrollPrev}
                        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll left"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <ChevronLeft className="h-6 w-6 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-[-1.5rem] z-20 p-2 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
                        aria-label="Scroll right"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <ChevronRight className="h-6 w-6 text-black" />
                    </button>

                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-6 px-6">
                            {services.map((service, index) => (
                                <Card
                                    key={index}
                                    className="scroll-ml-6 scroll-snap-start min-w-[90%] sm:min-w-[320px] max-w-sm bg-white border shadow-sm rounded-xl overflow-hidden transition-transform duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={100 * (index % 3)} // Delay baseado no índice para criar efeito cascata
                                >
                                    <div className="overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg font-semibold text-black">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-700 text-sm text-justify">{service.desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}