import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Head from 'next/head';
import Loading from './Loading';
import NavBar from './NavBar';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

function Layout({ children }) {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, [])

  return (
    <>
      {!loading ? <><Head>
        <title>RoboZone</title>
      </Head>
        <main id="app" className='flex flex-col bgpattern w-screen h-screen justify-between text-black content-center items-center'>
          <NavBar />
          <Container>{children}</Container>
          <div className='shadow-md border text-sm text-opacity-40 text-black rounded-b-none border-b-0 p-5 flex flex-row justify-between bg-white rounded-xl w-[500px]'>
            <span>Github</span>
            <span>About</span>
            <span>Copyright 2023 &copy; RoboZone</span>
          </div>
        </main> </> : <Loading />}
    </>
  )

}

export default withPageAuthRequired(Layout, {
  onRedirecting: () => '',
});
