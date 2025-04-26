'use client'

import { CgScreen } from "react-icons/cg"

export default function Card({ props }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center border-2 border-[#2F195F] rounded-lg p-4"
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
            <div className="flex items-center justify-center m-4 text-white">
                {props.icon}
            </div>
            <div>
                <h1 className="text-center md:text-left text-lg md:text-2xl text-white font-bold">{props.title}</h1>
                <p className="text-white text-center md:text-left text-sm md:text-base mt-2">
                    {props.description}
                </p>
            </div>
        </div>
    )
}