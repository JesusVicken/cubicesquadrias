export default function ProjetosPage() {
    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Projetos Realizados</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                    <div
                        key={id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden border"
                    >
                        <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-xl">
                            Imagem {id}
                        </div>
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2">Projeto {id}</h2>
                            <p className="text-sm text-muted-foreground">
                                Descrição breve do projeto realizado, materiais utilizados e diferencial técnico.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}
