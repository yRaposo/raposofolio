'use client'

export default function StylezedBtn({ props, onClick }) {
    return (
        <button onClick={onClick} className={`flex gap-2 font-bold py-2 px-2 rounded-full hover:mx-5 hover:scale-150 transition-all duration-300 ease-in-out active:scale-95`}
            style={{
                background: props.bgColor,
                color: props.textColor,
                border: `2px solid ${props.borderColor}`,
            }}>
            {props.icon ? <div className="my-auto">
                {props.icon}
            </div> : null}
            {props.text ? <div>
                {props.text}
            </div> : null}
        </button>
    )
}
