import { useRouter } from 'next/router';
import { HeartIcon } from '@heroicons/react/solid';
export default function Postcard({ title, description, id, community = false, likes = 0 }) {
    const maxLength = 40;
    const router = useRouter();
    const truncatedDesc = description?.substring(0, maxLength) + '...';

    if (community) {
        return (
            <div onClick={() => router.push('/post/' + id)} className='flex flex-col hover:-translate-y-[10px] cursor-pointer hover:shadow-md space-y-3 transition duration-300 ease-in-out bg-white border justify-between rounded-xl p-5 shadow'>
                <div className='flex flex-row w-full justify-between items-center content-center'>
                    <span className='underline decoration-4 decoration-blue-600 font-bold text-lg'>{title}</span>
                </div>
                <span className='text-black text-opacity-40 font-normal text-md'>{truncatedDesc}</span>
                <span className='flex flex-row justify-end text-xs text-black text-opacity-40'>
                    <div className='rounded-full  flex flex-row items-center content-center '>
                        <HeartIcon className={'w-7 h-7 text-red-500 p-1 rounded-full'} />
                        <span className='text-red-500 px-1 text-xs'>{likes} aprecieri</span>
                    </div>
                </span>

            </div>
        )
    } else {
        return (
            <div onClick={() => router.push('/post/' + id)} className='flex flex-col hover:-translate-y-[10px] cursor-pointer hover:shadow-md space-y-3 transition duration-300 ease-in-out bg-white border justify-between rounded-xl p-5 shadow'>
                <span className='underline decoration-4 decoration-blue-600 font-bold text-lg'>{title}</span>
                <span className='text-black text-opacity-40 font-normal text-md'>{truncatedDesc}</span>
                <span className='flex flex-row justify-between text-xs text-black text-opacity-40'>
                    <span>{likes} likes</span>
                </span>
            </div>
        )
    }
}