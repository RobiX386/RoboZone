import Lectii from "../homePage/page";


export default function AllLessons(){
    return (
        <div className="flex justify-center align-center">
            <div className="max-w-[700px] w-[80%]">
                <div className="mt-[30px] flex flex-col items-center justify-start">
                    <h1 className="text-center text-5xl logoGradient font-semibold">Toate Lectiile</h1>
                    <hr />
                    <Lectii />
                </div>
            </div>
        </div>
    )
}