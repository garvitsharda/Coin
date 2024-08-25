import IndividualLeader from "../IndividualLeader/IndividualLeader"
import TitleButton from "../TitleButton/TitleButton"

import { HiClipboardList } from 'react-icons/hi'
// icons images
import Icon from '/public/assests/images/group21@3x.png'
import Icon2 from '/public/assests/images/group22@3x.png'
import Icon3 from '/public/assests/images/group23@3x.png'

const LeaderBoard = () => {
    return (
        <div className="my-4 col-span-12 lg:col-span-8 h-fit">
            <TitleButton title={"Highest Wins"} />

            <div className="bg-msgbg-900 rounded-2xl p-4 mt-3 h-full">
                <div className="border-b-2 border-gray-400 flex items-center justify-between mx-4 py-1">
                    <h1 className="text-white text-1xl font-bold">LeaderBoard</h1>
                    <button className="text-white text-[13px] bg-navbg-800 px-1 py-0 rounded-xl flex items-center justify-between">
                        <HiClipboardList className="text-green-700" />
                        <span>View all</span>
                    </button>
                </div>

                <div className="mt-4">
                    <IndividualLeader SolanaVal={800} Icon={Icon} bodColor={"border-yellow-400"} txtColor={"text-yellow-400"} />
                    <IndividualLeader SolanaVal={240} Icon={Icon2} bodColor={""} txtColor={""} />
                    <IndividualLeader SolanaVal={360} Icon={Icon3} bodColor={""} txtColor={"text-yellow-500"} />
                </div>
            </div>
        </div>
    )
}

export default LeaderBoard