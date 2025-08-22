export default function TestFonts() {
    return (
        <div className="p-8 space-y-6">
            <h1 className="text-3xl font-bold mb-8">Teste de Fontes</h1>

            <div className="space-y-6">
                <div>
                    <p className="text-sm text-gray-600 mb-2">BebasNeue (Tailwind):</p>
                    <h2 className="font-bebas text-4xl">TESTE BEBAS NEUE TAILWIND</h2>
                    <p className="text-sm text-gray-600 mb-2">BebasNeue (CSS direto):</p>
                    <h2 className="test-bebas text-4xl">TESTE BEBAS NEUE CSS</h2>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-2">Timegoing (Tailwind):</p>
                    <h2 className="font-timegoing text-3xl">Teste Timegoing Tailwind</h2>
                    <p className="text-sm text-gray-600 mb-2">Timegoing (CSS direto):</p>
                    <h2 className="test-timegoing text-3xl">Teste Timegoing CSS</h2>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-2">Roboto (Tailwind):</p>
                    <h2 className="font-roboto text-3xl">Teste Roboto Tailwind</h2>
                    <p className="text-sm text-gray-600 mb-2">Roboto (CSS direto):</p>
                    <h2 className="test-roboto text-3xl">Teste Roboto CSS</h2>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-2">Kode Mono (Tailwind):</p>
                    <h2 className="font-kode text-2xl">Teste Kode Mono Tailwind</h2>
                    <p className="text-sm text-gray-600 mb-2">Kode Mono (CSS direto):</p>
                    <h2 className="test-kode text-2xl">Teste Kode Mono CSS</h2>
                </div>

                <div>
                    <p className="text-sm text-gray-600 mb-2">Font padrão:</p>
                    <h2 className="text-3xl">Teste sem fonte personalizada</h2>
                </div>
            </div>
        </div>
    );
}
