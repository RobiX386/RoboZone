import Link from "next/link";

export default function Header(props){
    return (
        <div className={props.classes}>
            <div className="flex justify-around items-center py-[20px] darkLightBackground">
                <Link className="text-3xl font-black logoGradient stroke-[10px]" href="http://localhost:3000/">RoboZone</Link>
                <div className="flex justify-between items-center">
                    <Link href="http://localhost:3000/account" className="color_light text-2xl">Account</Link>
                </div>
            </div>
        </div>
    )
}