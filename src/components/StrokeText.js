export default function StrokeText({ text, className = "", repeat = 1, vertical = false }) {
    if (vertical) {
        return (
            <div className={`relative flex flex-col ${className}`}>
            {Array.from({ length: repeat }).map((_, i) => (
                <span
                key={i}
                className="absolute left-0 text-transparent font-bebas text-[9rem] font-bold stroke-text-white opacity-30 transform -translate-x-1 -translate-y-10"
                style={{ top: `${i * 7}rem` }}
                >
                {text}
                </span>
            ))}
            </div>
        )
    } else {
        return (
            <div className={`relative ${className}`}>
                <span className="absolute top-0 left-0 text-transparent font-bebas text-[9rem] font-bold stroke-text-white opacity-30 transform -translate-x-1 -translate-y-10">
                    {text.repeat(repeat)}
                </span>
            </div>
        )
    }
}