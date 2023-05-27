import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[700px] color_light flex flex-col items-center justify-start pt-[20px] mt-[80px] text-6xl">
      <Link className='py-[20px]' href="http://localhost:3000/exercitii/ex1">Exercitiul 1</Link>
      <Link className='py-[20px]' href="http://localhost:3000/exercitii/ex2">Exercitiul 2</Link>
      <Link className='py-[20px]' href="http://localhost:3000/exercitii/ex3">Exercitiul 3</Link>
      <Link className='py-[20px]' href="http://localhost:3000/exercitii/ex4">Exercitiul 4</Link>
    </main>
  )
}