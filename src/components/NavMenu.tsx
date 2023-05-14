'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const links = [
  { name: 'QUEM SOMOS', link: 'https://clickspeednet.com.br/quem-somos/' },
  { name: 'NOSSOS PLANOS', link: 'https://clickspeednet.com.br/nossos-planos/' },
  { name: 'lOCALIZAÇÃO', link: 'https://clickspeednet.com.br/localizacao/' },
  { name: 'INDIQUE E GANHE', link: 'https://clickspeednet.com.br/indique-e-ganhe/' },
];

export default function NavMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="hidden max-md:block">
      <div className="flex w-full justify-between">
        <Image
          className="ml-2 h-10 w-40 "
          src={'/clickspeed.png'}
          alt="Logo da Click"
          width={166}
          height={38}
        />
        <div className="flex flex-col">
          <div className="ml-5 w-14">
            <button onClick={handleDropdown}>
              {showDropdown ? (
                <XMarkIcon className="mt-1 w-9 rounded-md bg-rose-700 font-semibold text-white" />
              ) : (
                <Bars3Icon className="mt-1 w-9 rounded-md bg-rose-700 font-semibold text-white" />
              )}
            </button>
          </div>
          <div>
            {showDropdown && (
              <ul className="absolute left-0 h-52 w-full bg-purple-800">
                {links.map((link, index) => (
                  <li className=" ml-5 mt-5 text-left text-white" key={index}>
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
