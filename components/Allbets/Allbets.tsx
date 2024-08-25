
import Image from 'next/image'
import TitleButton from '../TitleButton/TitleButton'
import { FaClipboard } from 'react-icons/fa'


import solanaIcon from '/public/assests/images/solana_icon.png'

const Allbets = () => {
    let BetsData = [
        { playerName: "F5X3", Multiplyer: "2x", Mode: "Random", Time: "1 minute ago", Payout: "+5 SOL" },
        { playerName: "F5X3", Multiplyer: "1.6x", Mode: "Heads", Time: "1 minute ago", Payout: "-1.021 SOL" },
        { playerName: "F5X3", Multiplyer: "2.5x", Mode: "Tails", Time: "2 minute ago", Payout: "-0.05 SOL" },
        { playerName: "F5X3", Multiplyer: "1.6x", Mode: "Heads", Time: "1 minute ago", Payout: "+1.277 SOL" },
        { playerName: "F5X3", Multiplyer: "2x", Mode: "Random", Time: "2 minute ago", Payout: "+5 SOL" },
        { playerName: "F5X3", Multiplyer: "1.6x", Mode: "Tails", Time: "1 minute ago", Payout: "-1.024 SOL" },
    ];
    return (
        <>
            <TitleButton title='All bets' />
            <div className='bg-[#283345] md:rounded-2xl rounded-md my-6 lg:px-10 md:px-6 px-2 md:min-w-full w-fit mx-auto'>
                <table className="md:min-w-full w-full mx-auto">
                    <thead className="">
                        <tr className="text-gray-300">
                            <th scope="col" className="py-3 md:text-sm text-[12px] font-semibold text-left">
                                Player
                            </th>
                            <th scope="col" className="py-3 px-4  md:text-sm text-[12px] font-semibold text-left">
                                Multiplyer
                            </th>
                            <th scope="col" className="py-3 md:text-sm text-[12px] text-center font-semibold md:table-cell hidden">
                                Mode
                            </th>
                            <th scope="col" className="py-3 md:text-sm text-[12px] text-center font-semibold md:table-cell hidden">
                                Time
                            </th>
                            <th scope="col" className="py-3 md:text-sm text-[12px] font-semibold text-right">
                                Payout
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BetsData.map((betRow, id) => {
                                return <tr className={`${id % 2 === 0 ? "bg-[#344258]" : ""} rounded-lg text-gray-300`} key={id}>
                                    <td className="md:py-4 py-2 pl-4 md:text-sm text-[12px] font-extrabold flex items-center justify-start space-x-2">
                                        <FaClipboard className='md:w-4 w-2' />
                                        <span>
                                            {betRow.playerName}
                                        </span>
                                    </td>
                                    <td className="md:py-4 py-2 md:pl-7 px-4 md:text-sm text-[12px] font-extrabold ">
                                        {betRow.Multiplyer}
                                    </td>
                                    <td className="md:py-4 py-2 md:pl-8 md:text-sm text-[12px] font-extrabold text-center md:table-cell hidden">
                                        <span className={`px-2 py-1 ${betRow.Mode.toLowerCase() === "random" ?
                                            "bg-yellow-600"
                                            :
                                            betRow.Mode.toLowerCase() === "tails" ?
                                                "bg-teal-900"
                                                :
                                                "bg-purple-900"} rounded-full `}>
                                            {betRow.Mode}
                                        </span>
                                    </td>
                                    <td className="md:py-4 md:pl-16 py-2 md:text-sm text-[12px] font-extrabold text-center md:table-cell hidden">
                                        {betRow.Time}
                                    </td>
                                    <td className="md:py-4 py-2 md:px-7 px-3 md:text-sm text-[12px] font-extrabold flex justify-end items-center space-x-2">
                                        <span className={`${betRow.Payout.includes("+") ? "text-green-500" : "text-gray-500"}`}>
                                            {betRow.Payout}
                                        </span>
                                        <Image src={solanaIcon} alt="solana Icon" className='md:w-6 w-3 ' />
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Allbets