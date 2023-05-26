import Image from "next/image"
import Link from "next/link"

export default function Thumbnail(props){
    // if (props.subtitle.length > 35){props.subtitle = props.--.substring(0,35) + "..."}
    const slug = props.slug
    return (
        <div className={props.classes}>
            <div className="flex justify-start items-center w-[60p%]">
                <div className="hidden sm:block">
                    <Image
                        src={props.imageSrc}
                        width={160}
                        height={160}
                        alt="picture"
                    />
                </div>
                <div className="pl-[20px] hover:font-semibold hover:tracking-tight">
                    <Link href={`/posts/${slug}`}>
                        <h1 className="text-2xl textColorDark font-bold mb-[10px]">{props.titlu}</h1>
                        <p className="text-xl textColorDark ">{props.subtitle.length > 60 ? `${props.subtitle.substring(0, 60)}...` : props.subtitle}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}