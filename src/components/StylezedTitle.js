export default function StylezedTitle({ titulo1, titulo2}) {
    return (
        <div className="flex flex-col items-start text-white">
            <h1 className="font-bebas text-4xl tracking-wider">{titulo1}</h1>
            <h2 className="font-timegoing text-2xl">{titulo2}</h2>
        </div>
    );
}
