
import Image, { StaticImageData } from "next/image"
import solana from '/public/assests/images/solana_icon.png'

interface props {
    SolanaVal: number
    Icon: StaticImageData
    bodColor: String
    txtColor: String
}
const IndividualLeader = ({ SolanaVal, Icon, bodColor, txtColor }: props) => {
    return (
        <div className={`border-[4px] rounded-md grid grid-cols-12 md:h-auto my-4 text-white ${bodColor}`}>
            <div className="lg:col-span-4 col-span-4 bg-navbg-900 p-2 flex items-center md:p-5">
                <Image src={Icon} alt="solanaIcon" className="md:h-20 md:w-20 w-8 h-8" />
                <div className="md:mx-4 mx-0">
                    <h1 className="md:text-xl text-[8px] font-extrabold">Professor</h1>
                    <p className="md:text-[12px] text-[6px]">a few seconds ago</p>
                </div>
            </div>
            <div className="lg:col-span-8 col-span-8 p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="md:text-[1rem] text-[8px] font-bold">PAYOUT&nbsp;&nbsp;</span>
                    <Image src={solana} alt="solanaIcon" className="md:h-5 h-3 md:w-5 w-3" />
                </div>
                <div>
                    <h1 className={`md:text-3xl text-[10px] font-bold ${txtColor}`}>{SolanaVal} SOL</h1>
                </div>
            </div>
        </div>
    )
}

export default IndividualLeader