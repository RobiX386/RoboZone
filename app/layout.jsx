import React from 'react';
import "@styles/globals.css";
import NavBar from '@components/NavBar';

const Rootlayout = ({children}) => {
  return (
    <html>
        <body className='fundal'>
            <NavBar></NavBar>
            {children}
        </body>
    </html>
  )
}

export default Rootlayout