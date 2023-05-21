import Image from 'next/image'
import './globals.css'
import Thumbnail from '@/components/lectieThumbnail'
import NavBar from '@components/NavBar'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <Thumbnail titlu="Ce este FTC?" subtitle="First tech challenge este o competitie de robotica care..." imageSrc="/images/images.jpg"/>
      <Thumbnail titlu="Ce este FTC?" subtitle="First tech challenge este o competitie de robotica care..." imageSrc="/images/images.jpg"/>
    </main>
  )
}