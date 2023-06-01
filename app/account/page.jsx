"use client";
import React from 'react';
import GetUser from './getUser';
import { useState } from "react";


export default async function Page(){
    const user = await GetUser();
    console.log(user);

    if(!user)
    {
    return (
        <main>
            <div className='flex flex-col justify-center items-center'>
                <p className='color_light text-5xl text-left sm:text-center mt-[100px] mb-[50px]'>Nu esti logat</p>
                <Link href="http://localhost:3000/register" className="px-[58px] py-[17px] my-[10px] sm:my-[0px] sm:mx-[30px] text-2xl backgroundPrimary textColorLight rounded-xl ">
                Login
                </Link>
                <Link href="http://localhost:3000/login" className="px-[45px] py-[17px] my-[10px] sm:my-[0px] sm:mx-[30px] text-2xl backgroundSecondary textColorLight rounded-xl ">
                Sign Up
                </Link>
                {/* <a className='login_buton text-center font-semibold text-5xl px-[50px] py-[20px]' href='/login'>Login</a> */}
            </div>
        </main>  
    )}
    {
        return (
            <main className='h-[700px]'>
                <div className='flex color_light justify-center'>
                    {console.log('logged')}
                    <div className='border_primary w-[400px] border-4 rounded-lg text-left mt-[50px] p-[10px]'>
                        email : {user.email} <br></br>
                        creat in : {user.created_at.substring(0,10)}
                    </div>
                </div>
            </main>  
        ) 
    }
}