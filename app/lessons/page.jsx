import Lectii from "../homePage/page";
import Linie from "../../components/line"

export default function AllLessons(){
    return (
        <div className="min-h-[700px]">
            <div className="flex justify-center align-center">
                <div className="max-w-[900px] w-[80%]">
                    <div className="mt-[30px] flex flex-col items-center justify-start">
                        <h1 className="text-center text-5xl logoGradient font-semibold">Toate Lectiile</h1>
                        <Linie classes="w-[88%]"/>
                        <Lectii />
                    </div>
                </div>
            </div>
        </div>
    )
}