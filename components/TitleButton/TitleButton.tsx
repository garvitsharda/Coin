
interface titleType {
    title: string
}
const TitleButton = (props: titleType) => {

    const { title } = props;
    return (
        <h2 className="text-white bg-navbg-800 w-fit rounded-3xl text-1xl font-semibold p-2">
            <span>{title}</span>
            <span className="w-[10px] h-[10px] inline-block rounded-full mx-2 bg-green-400"></span>
        </h2>
    )
}

export default TitleButton