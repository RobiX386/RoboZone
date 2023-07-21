import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import {LogoutIcon, PlusIcon} from '@heroicons/react/solid'
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import PageLink from '../components/PageLink';
import AnchorLink from '../components/AnchorLink';
import Link from 'next/link';
import LogoPNG from '../public/logoCol.png';
import { useRouter } from 'next/router';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  return (
    <div className='flex flex-row w-full justify-between items-center content-center p-10'>
      <Link href='/'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 font-extrabold text-xl'>RoboZone</span>
      </Link>
      <div className='flex flex-row border rounded-xl overflow-hidden bg-white rounded-l-full w-fit rounded-r-full items-center content-center space-x-7 font-bold'>
        <Link href='/posts/community/add' className='bg-blue-500 text-white px-5 flex flex-row items-center content-center justify-center space-x-2 py-2'>
          <span>Posteaz&#259;</span><PlusIcon className='w-4 h-4' />
        </Link>
        <Link href='/posts/course' className='bg-white text-gray-500 transition duration-300 ease-in-out hover:text-black'>
          Lectii
        </Link>
        <Link href='/posts/community' className='bg-white text-gray-500 transition duration-300 ease-in-out hover:text-black'>
          Community
        </Link>
        <Link href='/exercises' className='bg-white text-gray-500 transition duration-300 ease-in-out hover:text-black'>
          Exerci&#355;ii
        </Link>
        <Image onClick={() => router.push('/account/settings')} src={user?.picture} width={40} height={40} alt={user?.nickname} className="rounded-full cursor-pointer border-2 border-white" />
      </div>
    </div>
  );
};

export default NavBar;
