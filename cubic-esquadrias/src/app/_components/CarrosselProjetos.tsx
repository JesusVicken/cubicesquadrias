'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const imagens = [
    '/projeto1.jpg',
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
    const containerRef = useRef<HTMLDivElement>(null)
    const intervaloRef = useRef<NodeJS.Timeout | null>(null)

    const iniciarScroll = () => {
        intervaloRef.current = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({
                    left: containerRef.current.offsetWidth / 4, // scrolla 1 imagem por vez (25%)
                    behavior: 'smooth',
                })

                // reset no final
                const maxScrollLeft = containerRef.current.scrollWidth - containerRef.current.clientWidth
                if (containerRef.current.scrollLeft + 5 >= maxScrollLeft) {
                    containerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                }
            }
        }, 2000)
    }

    const pararScroll = () => {
        if (intervaloRef.current) {
            clearInterval(intervaloRef.current)
            intervaloRef.current = null
        }
    }

    useEffect(() => {
        iniciarScroll()
        return () => pararScroll()
    }, [])

    return (
        <div
            className="w-full overflow-hidden"
            onMouseEnter={pararScroll}
            onMouseLeave={iniciarScroll}
        >
            <div
                ref={containerRef}
                className="flex w-full gap-4 transition-all duration-1000 ease-in-out overflow-x-auto scroll-smooth no-scrollbar"
            >
                {imagens.map((src, i) => (
                    <div key={i} className="min-w-[25%] flex-shrink-0 h-[300px] relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={src}
                            alt={`Projeto ${i + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
