'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '../_components/section-title'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowRight, Plus } from 'lucide-react'

interface Cliente {
    id: number
    nome: string
    logo: string
    isCTA?: boolean
    isResidencial?: boolean // Nova propriedade para identificar esses cards
}

const CLIENTES: Cliente[] = [
    {
        id: 1,
        nome: "Tecna Construtora",
        logo: "/tecna.preto.png"
    },
    {
        id: 2,
        nome: "Embaixada Britânica Brasília",
        logo: "/embaixada.png"
    },
    {
        id: 3,
        nome: "Max Pharma",
        logo: "/max.webp"
    },
    {
        id: 4,
        nome: "Body Tech",
        logo: "/bt.png"
    },
    {
        id: 5,
        nome: "Rede Sarah",
        logo: "/sarah.png"
    },
    {
        id: 6,
        nome: "Casas de Alto Padrão",
        logo: "/casa123.png",
        isResidencial: true
    },
    {
        id: 7,
        nome: "Condomínios Residenciais",
        logo: "/condominio.jpg",
        isResidencial: true
    },
    {
        id: 8,
        nome: "Seja Nosso Cliente",
        logo: "/your-company-logo.png",
        isCTA: true
    }
]

export default function Clientes() {
    const handleWhatsAppRedirect = () => {
        const phoneNumber = '5561994258350'
        const message = 'Olá, gostaria de fazer um orçamento com vocês!'
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, '_blank')
    }

    return (
        <section className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-background to-muted/10">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <SectionTitle
                        title="Nossos Clientes"
                        subtitle="Empresas que confiam em nosso trabalho"
                        className="mb-6"
                    />
                </div>

                {/* Desktop - Grid aprimorado */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-8">
                    {CLIENTES.map((cliente) => (
                        <ClienteCard
                            key={cliente.id}
                            cliente={cliente}
                            onClick={cliente.isCTA ? handleWhatsAppRedirect : undefined}
                        />
                    ))}
                </div>

                {/* Mobile - Carrossel com Swiper */}
                <div className="md:hidden max-w-2xl mx-auto px-4">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 3
                        }}
                        loop={true}
                        className="pb-14"
                    >
                        {CLIENTES.map((cliente) => (
                            <SwiperSlide key={cliente.id}>
                                <ClienteCard
                                    cliente={cliente}
                                    mobile
                                    onClick={cliente.isCTA ? handleWhatsAppRedirect : undefined}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

interface ClienteCardProps {
    cliente: Cliente
    mobile?: boolean
    onClick?: () => void
}

function ClienteCard({ cliente, mobile = false, onClick }: ClienteCardProps) {
    if (cliente.isCTA) {
        return (
            <div className="group perspective-1000">
                <Card
                    className="h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:shadow-primary/10 border-2 border-dashed border-primary/30 hover:border-primary/50 relative overflow-hidden bg-primary/5 flex flex-col items-center justify-center cursor-pointer"
                    onClick={onClick}
                >
                    <CardHeader className="pb-0 px-6 pt-6">
                        <div className={`relative w-full ${mobile ? 'h-52' : 'h-44'} flex items-center justify-center`}>
                            <div className="bg-primary/10 rounded-full p-6">
                                <Plus className="h-12 w-12 text-primary" />
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-3 text-center">
                        <CardTitle className="text-lg font-medium text-primary transition-colors duration-300">
                            {cliente.nome}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-2">
                            Clique para conversar no WhatsApp
                        </p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="group perspective-1000">
            <Card className="h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:shadow-primary/10 border border-muted/30 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="pb-0 px-6 pt-6">
                    <div className={`relative w-full ${mobile ? 'h-52' : 'h-44'} transition-transform duration-300 group-hover:scale-95`}>
                        <Image
                            src={cliente.logo}
                            alt={cliente.nome}
                            fill
                            className="object-contain p-4"
                            sizes={mobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                            quality={100}
                        />
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-3 text-center">
                    {cliente.isResidencial && (
                        <p className="text-sm text-muted-foreground mb-1">Também trabalhamos com</p>
                    )}
                    <CardTitle className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {cliente.nome}
                    </CardTitle>
                </CardContent>
            </Card>
        </div>
    )
}