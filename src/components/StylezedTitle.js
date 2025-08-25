export default function StylezedTitle({ titulo1, titulo2}) {
    return (
        <div className="flex flex-col items-center text-white">
            <h1 className="font-bebas text-5xl text-[#77FF00] text-center">{titulo1}</h1>
            <h2 className="font-timegoing text-3xl mt-[-47] text-center stroke- stroke-black">{titulo2}</h2>
        </div>
    );
}
