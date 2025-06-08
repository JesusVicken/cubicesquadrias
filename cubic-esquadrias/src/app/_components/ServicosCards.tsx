'use client'

import { ReactNode, useEffect } from "react"
import { Building2, SquareStack, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AOS from 'aos'
import 'aos/dist/aos.css'

interface CardServicoProps {
    icon: ReactNode
    title: string
    desc: string
    index: number
}

function CardServico({ icon, title, desc, index }: CardServicoProps) {
    return (
        <div
            tabIndex={0}
            className="border-animated rounded-xl p-1 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={100 * index}
        >
            <Card className="bg-[#121212] border-none rounded-xl relative z-10 max-w-sm mx-auto">
                <CardHeader className="flex flex-col items-center">
                    {icon}
                    <CardTitle className="text-xl text-white">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300 text-sm text-justify">{desc}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default function ServicosCards() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const cards = [
        {
            icon: <SquareStack className="w-12 h-12 text-green-500 mb-4" />,
            title: "Esquadrias de Alumínio",
            desc: "Produção e instalação de esquadrias de alumínio sob medida, com acabamento de alta qualidade e durabilidade para diversos tipos de projetos."
        },
        {
            icon: <Building2 className="w-12 h-12 text-green-500 mb-4" />,
            title: "Fachadas em ACM e Vidro",
            desc: "Fachadas modernas com revestimento em ACM e pele de vidro, garantindo sofisticação, resistência e melhor performance térmica e acústica."
        },
        {
            icon: <Layers className="w-12 h-12 text-green-500 mb-4" />,
            title: "Vidros Temperados",
            desc: "Instalação de vidros temperados para ambientes internos e externos, com segurança, transparência e excelente acabamento."
        }
    ]

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12" data-aos="fade-up">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Nossos Segmentos
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
                        Desenvolvemos projetos sob demanda. Fabricamos e instalamos com profissionais experientes no mercado de esquadrias, fachadas e vidros, garantindo alta qualidade em cada etapa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map(({ icon, title, desc }, index) => (
                        <CardServico
                            key={title}
                            icon={icon}
                            title={title}
                            desc={desc}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}