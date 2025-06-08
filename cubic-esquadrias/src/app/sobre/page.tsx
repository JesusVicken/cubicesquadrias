'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function SobrePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <h1
                className="text-4xl font-bold mb-6 text-center"
                data-aos="fade-up"
            >
                Sobre a Cubic Esquadrias
            </h1>

            <p
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                data-aos="fade-right"
            >
                A <strong>Cubic Esquadrias</strong> nasceu com a missão de transformar projetos arquitetônicos em experiências visuais marcantes. Somos especialistas em esquadrias de alumínio de alto padrão, oferecendo soluções que unem design, funcionalidade e durabilidade para obras residenciais e corporativas.
            </p>

            <p
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                data-aos="fade-left"
            >
                Atuamos com excelência em cada etapa — do projeto à instalação — com um time técnico altamente qualificado e atento aos mínimos detalhes. Valorizamos a transparência, o comprometimento e o acabamento impecável. Cada peça que entregamos carrega o DNA da inovação e da estética refinada.
            </p>

            <p
                className="text-lg leading-relaxed text-muted-foreground mb-6"
                data-aos="fade-right"
            >
                Trabalhamos lado a lado com arquitetos, engenheiros e clientes para criar ambientes que combinam elegância e eficiência térmica/acústica, utilizando materiais de alto desempenho e tecnologia de ponta em fabricação.
            </p>

            <p
                className="text-lg leading-relaxed text-muted-foreground"
                data-aos="fade-up"
            >
                Mais do que esquadrias, entregamos <strong>soluções inteligentes e exclusivas</strong> para cada projeto. Na Cubic, o compromisso com a qualidade não é promessa — é padrão.
            </p>
        </main>
    )
}
