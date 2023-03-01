'use client';
import React, { useState } from 'react';
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { GoThreeBars } from 'react-icons/go'; 
import { RxCross2 } from 'react-icons/rx';
import { SectionEnum } from '../types';
import { NavbarOptions } from './NavbarOptions';

type Props = {
  selectedPage: SectionEnum;
  setSelectedPage: (value: SectionEnum) => void;
};

export const Navbar = (props: Props) => {
  const  { systemTheme, theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false)
  const currTheme = (theme === 'system' ? systemTheme : theme) || 'dark';
  return (
    <header className={`w-full backdrop-filter backdrop-blur-lg bg-gray/50 p-8 sticky z-40 top-0 trasition ease-in-out duration-500`}>
      <div className="flex justify-between md:px-36 items-center">
        <a className="pt-2 font-display text-2xl cursor-pointer items-center">
          Rashika Shaw
        </a>
        <div className="hidden pt-2 lg:flex space-x-8">
          <NavbarOptions {...props}/>
        </div>
        <div className='flex flex-row space-x-4'>
          <div className='lg:hidden ml-3'>
            {
              !isOpen && (
              <GoThreeBars size={25} onClick={() => setIsOpen(!isOpen)}/>
              )
            }
            {
              isOpen && (
              <div onClick={() => setIsOpen(false)}>
                <RxCross2 size={25} onClick={() => setIsOpen(!isOpen)}/>
                <div className="lg:hidden">
                  <div className="absolute flex flex-col z-50 items-center self-end py-8 mx-28 mt-10 rounded-xl space-y-6 font-bold bg-cyan-600 md:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                    <NavbarOptions {...props} />
                  </div>
                </div>
              </div>
              )
            }
            
          </div>
          { currTheme === 'dark' && (
            <button onClick={() => setTheme('light')} className=" px-4 cursor-pointer">
              <RiSunLine size={25}/>
            </button>
          )} 
          {currTheme === 'light' &&  (
            <button onClick={() => setTheme('dark')} className="cursor-pointer">
              <RiMoonFill size={25}/>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
