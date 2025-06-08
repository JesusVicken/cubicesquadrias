'use client'

import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    return (
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Imagens */}
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/esq1.jpg"
                                alt="Imagem institucional Cubic Esquadrias"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 transition-transform duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute lg:left-12 lg:-bottom-8 left-1/5 bottom-20 transform -translate-x-1/2 lg:translate-x-0 w-24 h-24 lg:w-40 lg:h-40 rounded-lg overflow-hidden">
                            <Image
                                src="/logo1.svg"
                                alt="Logo Cubic"
                                fill
                                quality={100}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Conteúdo textual */}
                    <div className="space-y-6 mt-10 lg:mt-0" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-gray-900">Sobre a Cubic Esquadrias</h2>

                        <p className="text-gray-700 text-justify">
                            Com um time de profissionais altamente qualificados, desde 2021 a <strong>Cubic Esquadrias</strong> oferece ao mercado de Brasília e entorno soluções completas em esquadrias de alumínio, vidros temperados, fachadas em pele de vidro e ACM. Atuamos com excelência em Brasília e em todo o Brasil.
                        </p>
                        <p className="text-gray-700 text-justify">
                            Nosso compromisso é transformar projetos em sonhos realizados, garantindo sempre alta performance e qualidade. Trabalhamos para ser referência em pontualidade, preço justo, organização e excelência.
                        </p>
                        <p className="text-gray-700 text-justify">
                            Valorizamos a qualidade dos nossos produtos e serviços, priorizando o relacionamento com clientes, colaboradores e fornecedores, sempre buscando superar expectativas em cada projeto.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Fundada em 2021, com atuação em Brasília e em todo o Brasil
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Especializada em alumínio, vidro temperado e fachadas
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Comprometimento com qualidade, pontualidade e preço justo
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/5561994258350?text=Olá, vim pelo site e gostaria de mais informações sobre os serviços da Cubic Esquadrias."
                                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
                            >
                                <WhatsappLogoIcon className="w-5 h-5" />
                                Contato via WhatsApp
                            </a>

                            <Link
                                href="/sobre"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                            >
                                <MapPin className="w-5 h-5 text-gray-800" />
                                Saiba mais
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
