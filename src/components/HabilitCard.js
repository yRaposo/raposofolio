export default function HabilitCard(props) {
    return (
        <div className="flex flex-row w-full border-1 border-[#F5F5F5] p-3 justify-between">
            <div className="flex flex-col w-full">
                <h3 className="text-start text-2xl font-roboto uppercase text-[#447EF2]">{props.title}</h3>
                <p className="text-start text-[#F5F5F5] font-roboto text-md">
                    {props.text}
                </p>
            </div>
            <div className="flex text-[#447EF2] justify-center items-center mr-2">
                {props.icon}
            </div>
        </div>
    )
}