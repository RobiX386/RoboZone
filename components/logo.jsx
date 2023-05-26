import Link from "next/link"

export default function Logo(props){
    return(
        <div className={props.classes}>
            <Link href="/app">
                <h1 className="text-3xl font-black logoGradient stroke-[10px]">RoboZone</h1>
            </Link>
        </div>
    )
}