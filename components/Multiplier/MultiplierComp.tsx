import { StaticImageData } from "next/image";
import { Dispatch, SetStateAction, useState } from "react"


interface OddsProps {
    setOddsValue: Dispatch<SetStateAction<string>>
}
const MultiplierComp = ({ setOddsValue }: OddsProps) => {

    const [active, setActive] = useState(0);

    return (
        <div className="mt-2">
            <h6 className="text-gray-400 font-bold text-sm ml-5">Multiplier</h6>
            <div className="bg-tabsbG-900 text-[12px] md:text-sm font-bold text-white flex items-center justify-between md:p-2 p-4 rounded-full mt-2">
                <button className={`hover:bg-navbg-800 px-4 py-0 md:py-1 rounded-full ${active == 0 && "bg-navbg-800"}`} onClick={() => {
                    setActive(0)
                    setOddsValue("2.5X odds (40%)")
                }}>2.5X</button>
                <button className={`hover:bg-navbg-800 px-4 py-0 md:py-1 rounded-full ${active == 1 && "bg-navbg-800"}`} onClick={() => {
                    setActive(1)
                    setOddsValue("2X odds (50%)")
                }}>2X</button>
                <button className={`hover:bg-navbg-800 px-4 py-0 md:py-1 rounded-full ${active == 2 && "bg-navbg-800"}`} onClick={() => {
                    setActive(2)
                    setOddsValue("1.66X odds (60%)")
                }}>1.66X</button>
            </div>
        </div>
    )
}

export default MultiplierComp