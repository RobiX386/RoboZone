import { useRouter } from 'next/router';
import { HeartIcon } from '@heroicons/react/solid';
export default function Excard({ title, description, id }) {
    const maxLength = 40;
    const router = useRouter();
    const truncatedDesc = description?.substring(0, maxLength) + '...';

    return (
        <div className='flex flex-col hover:-translate-y-[10px] cursor-pointer hover:shadow-md space-y-3 transition duration-300 ease-in-out bg-white border justify-between rounded-xl p-5 shadow'>
            <span className='underline decoration-4 decoration-blue-600 font-bold text-lg'>{title}</span>
            <span className='text-black text-opacity-40 font-normal text-md'>{truncatedDesc}</span>
            <span className='flex flex-row justify-between text-xs text-black text-opacity-40'>
            </span>
        </div>
    )
}