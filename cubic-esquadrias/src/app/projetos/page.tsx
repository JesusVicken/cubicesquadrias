'use client'

import CarrosselProjetos from '../_components/CarrosselProjetos'

export default function ProjetosPage() {
    return (
        <main className="px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Nossos Projetos</h1>
            <CarrosselProjetos />
        </main>
    )
}
