'use client'

import { CgScreen } from "react-icons/cg"

export default function Card({ props }) {
    return (
        <div className="flex flex-row items-center justify-center border-2 border-[#2F195F] rounded-lg p-4"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center left 300px',
                backgroundRepeat: 'repeat',
                backgroundImage: 'url("/imgs/bg/cardBG.png")',
                backgroundRepeat: "no-repeat",

            }}
        >
            <div

            />
            <div className="flex items-center justify-center mr-4 text-white">
                {props.icon}
            </div>
            <div>
                <h1 className="text-2xl text-white font-bold">{props.title}</h1>
                <p className="text-white">
                    {props.description}
                </p>
            </div>
        </div>
    )
}