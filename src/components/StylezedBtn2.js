export default function StylezedBtn2({ props, onClick }) {
    return (
        <button onClick={onClick} className="flex gap-2 hover:bg-[#2F195F] text-white font-bold py-2 px-4 rounded-full border-2 border-[#2F195F]">
            {props.icon ? <div className="my-auto">
                {props.icon}
            </div> : null}
            {props.text ? <div>
                {props.text}
            </div> : null}
        </button>
    )
}