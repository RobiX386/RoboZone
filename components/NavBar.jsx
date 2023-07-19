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
      <div className='flex flex-row items-center content-center space-x-7 font-bold'>
        <Link href='/'>
          Lectii
        </Link>
        <Link href='/'>
          Community
        </Link>
        <Image onClick={() => router.push('/account/settings')} src={user?.picture} width={40} height={40} alt={user?.nickname} className="rounded-full cursor-pointer border-2 border-white" />
      </div>
    </div>
  );
};

export default NavBar;
