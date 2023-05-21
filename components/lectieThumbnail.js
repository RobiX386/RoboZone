import Image from "next/image"

export default function Thumbnail(props){
    // if (props.subtitle.length > 35){props.subtitle = props.--.substring(0,35) + "..."}
    return (
        <div className="flex justify-start items-center w-[700px]">
            <Image
                src={props.imageSrc}
                width={130}
                height={130}
                alt="picture" 
            />
            <div className="pl-[20px]">
                <h1 className="text-2xl textColorDark font-bold pb-[10px]">{props.titlu}</h1>
                <h2 className="text-xl textColorDark font-medium">{props.subtitle.length > 20 ? `${props.subtitle.substring(0, 40)}...` : props.subtitle}</h2>
            </div>
        </div>
    )
}