"use client";
import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';



const page = () => {

    const routers = useRouter();

    const [supabase] = useState(() => createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    ));

    const [emailval, setEmailVal] = useState("");
    const changeEmail = (event) => {
        setEmailVal(event.target.value)
    }

    const [passval, setPassVal] = useState("");
    const changePass = (event) => {
        setPassVal(event.target.value)
    }

    const signIn = () => {
        supabase.auth.signInWithPassword({
            email: emailval,
            password: passval,
        })
        routers.push("/");
    }

    return (
        <main>
            <div className="login_title">Login Page</div>
            <div className='flex flex-col items-center'>
                <input className='login_form' onChange={changeEmail} type='email' placeholder='email' id='email'></input>
                <input className='login_form' onChange={changePass} type='password' placeholder='password' id='pass'></input>
                <button className='login_buton' onClick={signIn}>Login</button>
            </div>
        </main>
  )
}
export default page