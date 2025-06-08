'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Testimonial = {
    name: string
    message: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jesus Vicken',
        message: 'Excelente atendimento! A qualidade das estruturas e o acabamento são impecáveis. Super recomendo a empresa.',
    },
    {
        name: 'Marco Oliveira',
        message: 'O resultado final ficou maravilhoso! Meus clientes ficaram impressionados com a sofisticação.',
    },
    {
        name: 'Tatiane Ramos',
        message: 'Profissionais incríveis! Tudo foi entregue no prazo e com excelente acabamento.',
    },
    {
        name: 'João Marcelo',
        message: 'Fiquei muito satisfeito com a experiência! Atendimento atencioso e serviço impecável.',
    },
    {
        name: 'Camila Souza',
        message: 'Sem dúvidas a melhor empresa do segmento. Superou todas as expectativas.',
    },
    {
        name: 'Renan Lopes',
        message: 'Desde o primeiro contato até a entrega final, tudo foi muito profissional.',
    },
]

export default function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'center',
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 2 }
        }
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <section className="bg-black text-white py-12 md:py-20 relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                        Depoimento dos nossos clientes
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
                        Veja o que nossos clientes dizem sobre a experiência com nossos serviços e soluções.
                    </p>
                </div>

                <div className="relative">
                    {/* Botões de navegação - posicionados no meio verticalmente */}
                    <button
                        onClick={scrollPrev}
                        className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Mobile buttons - smaller and positioned inside */}
                    <button
                        onClick={scrollPrev}
                        className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/20 hover:bg-white/30 rounded-full transition"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="text-white w-4 h-4" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/20 hover:bg-white/30 rounded-full transition"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="text-white w-4 h-4" />
                    </button>

                    {/* Carousel */}
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex gap-4 md:gap-6 px-2 md:px-6">
                            {testimonials.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="flex-shrink-0 bg-neutral-900 rounded-xl shadow-md px-5 py-6 md:px-6 md:py-8 w-[85%] sm:w-[calc(50%-12px)] md:w-[400px]"
                                >
                                    <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3 md:mb-4 font-light italic">
                                        “{item.message}”
                                    </p>
                                    <p className="text-xs md:text-sm text-yellow-400 font-semibold">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}