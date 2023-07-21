import { useRouter } from "next/router";
import supabase from "../../utils/supabase";
import { useState, useEffect } from "react";
import Image from "next/image";
import Excard from "../../components/Excard";

export default function ExIndex() {
    const [exes, setexes] = useState([])
    const router = useRouter();

    async function fetchData() {
        try {
            const { data, error } = await supabase
                .from("quiz")
                .select("*")
                .order("id", { ascending: false });

            if (error) {
                console.error(error);
                return null;
            }
            setexes(data);
            console.log(data);

            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='flex flex-col select-none w-screen max-w-4xl'>
            <div className='flex flex-row items-center content-center justify-between'>
                <div className='flex flex-col space-y-3 justify-center'>
                    <span className='text-6xl font-bold underline decoration-6 decoration-blue-500'>Exerci&#355;ii</span>
                    <span className='text-gray-500 text-xl max-w-3xl '>Cocalarii îi învață pe cocalari robotikă</span>
                </div>
                <div className='animate-floatingsmall2'>
                    <Image src={'https://res.cloudinary.com/dvntmruhr/image/upload/v1689903258/Brain_Chip_fd9avb.png'} alt='' width={300} height={300} />
                </div>
            </div>
            <div className='flex flex-col space-y-5 pb-32 bg-white rounded-xl w-full'>
                <div className='grid grid-cols-2 gap-5'>
                    {exes.map((item) => (
                        <div className='h-full' key={'ROBOZONE_COMMUNITY_EX_X_' + item.id} onClick={() => router.push('/exercises/' + item.form_id)}>
                            <Excard id={item.id} title={item.title} description={item.subtitle}/>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}