import React from 'react';
import Link from "next/link";

const page = () => {
  return (
    <main>
        <div className="home_title">Bine ai venit</div>
        <div className='flex items-center justify-center'>
          <Link href="http://localhost:3000/login" className='home_login'>Login</Link>
          <Link href="http://localhost:3000/login" className='home_register'>Register</Link>
        </div>
    </main>
  )
}
export default page