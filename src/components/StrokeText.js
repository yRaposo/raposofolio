export default function StrokeText({ text, className = "", repeat = 1, vertical = false, position = "left" }) {
    if (vertical) {
        return (
            <div className={`relative flex flex-col items-center justify-center ${className}`}>
                {Array.from({ length: repeat }).map((_, i) => (
                    <span
                        key={i}
                        className="absolute left-1/2 transform -translate-x-1/2 text-transparent font-bebas text-[9rem] font-bold  -translate-y-10"
                        style={{
                            top: `${i * 7}rem`,
                            backgroundImage: "url(/imgs/eco.svg)",
                            backgroundSize: "100%",   // Tamanho do padrão
                            backgroundPosition: `${position}`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {text}
                    </span>
                ))}
            </div>
        )
    } else {
        return (
            <div className={`relative ${className}`}>
                <div className="absolute top-0 left-0 text-transparent font-bebas text-[9rem] font-bold transform -translate-x-1 -translate-y-12"
                    style={{
                        backgroundImage: "url(/imgs/eco.svg)",
                        backgroundSize: "330px",   // Tamanho do padrão
                        backgroundPosition: `${position}`,
                        backgroundRepeat: "repeat-x",
                    }}
                >
                    {text.repeat(repeat)}
                </div>
            </div>
        )
    }
}