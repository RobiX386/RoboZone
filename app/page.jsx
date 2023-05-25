import './globals.css'
import Link from 'next/link'
import Posts from './homePage/page'
import { LectiiIntroducere } from './homePage/page'

export default function Home() {
  return (
    <main className="color_light flex flex-col items-center justify-start mt-[80px]">
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-start justify-center'>
          <h1 className="text-5xl mr-[10px]">Invata </h1><h1 className='text-5xl ml-[10px] logoGradient'>robotica</h1>
        </div>
        <div className='mt-[70px]'>
          <Link href="http://localhost:3000/register" className="px-[45px] py-[17px] mx-[30px] text-2xl backgroundPrimary textColorLight rounded-xl ">
            Login
          </Link>
          <Link href="http://localhost:3000/login" className="px-[45px] py-[17px] mx-[30px] text-2xl backgroundSecondary textColorLight rounded-xl ">
            Sign Up
          </Link>
        </div>
      </div>
      <div className='lessonsWrap mt-[80px]'>
        <div>
          <h2 className='text-2xl'>Lectii de introducere</h2>
          <hr className='w-[500px] horizontalLine mt-[20px] mb-[15px]'/>
          {/* <Posts/> */}
          <LectiiIntroducere />
        </div>

      </div>
    </main>
  )
}
