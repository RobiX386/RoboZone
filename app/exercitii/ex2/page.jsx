"use client"
import { useState } from "react";

const page = () => {

    const [value, setvalue] = useState("");
    const changeValue = (event) => {
        setvalue(event.target.value)
    }

    const verify = () => {
        if(value === "float")
        alert("Ai raspuns corect!");
        else
        alert("Ai raspuns gresit...");

    }

    const rasp = () => {
        alert("Raspunsul corect era float");
    }

    return (
        <main>
            <div className='h-[700px]'>
                <h1 className='text-5xl font-bold text-center my-[30px] text-primary'>Exercitiul 1</h1>
                <p className="text-xl pt-[10px] pb-[35px] text-white text-center">Completeaza urmatoarea secventa de cod:</p>
                <div className="flex justify-center items-center">
                    <input
                    className="h-[20px] w-[80px]"
                    type="text"
                    onChange={changeValue}
                    />
                    <span className="ml-[10px] text-white text-2xl">Temperatura = 26.4</span>
                </div>
                <div className="flex justify-center items-center">
                    <button className='login_buton' onClick={verify}>verifica</button>
                    <button className='login_buton' onClick={rasp}>afiseaza raspuns</button>
                </div>
            </div>
        </main>
    )
}

export default page

// Completeaza urmatoarea secventa de cod:

// ... temperatura = 26.4;


// ... nume = "Daniel";


// ... primaLitera = 'c';