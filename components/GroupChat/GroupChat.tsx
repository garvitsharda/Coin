import TitleButton from "../TitleButton/TitleButton"

const GroupChat = () => {
    return (
        <div className="col-span-12 lg:col-span-4 h-fit">
            <TitleButton title={"Group Chat"} />
            <div className="bg-msgbg-900 mt-3 rounded-2xl pt-4 h-[32rem]">
                <h2 className="text-center text-md font-bold text-white">No Messages</h2>
            </div>
        </div>
    )
}

export default GroupChat