import React from 'react'
import {signIn, signOut, useSession} from "next-auth/react";
import Image from 'next/image'
import { useRouter } from 'next/router';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,} from "@heroicons/react/outline"
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  return (
    <header>
      {/* topnav */}
      <div className="flex items-center bg-amazon_blue p-3 flex-grow py-1">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={()=> router.push('/')}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            object-fit="contain"
            className="cursor-pointer p-3"
          />
        </div>

        {/* search */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px4" type="text" />
          <SearchIcon className="h-12 p-4 " />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn: signOut} className="cursor-pointer hover:underline">
            <p className='font-extrabold md:text-sm'>
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
          </div>
          
          <div className="cursor-pointer hover:underline">
            <p className='font-extrabold md:text-sm'>Returns</p>
            <p className='font-extrabold md:text-sm'>& orders</p>
          </div>

          <div onClick={() => router.push('/checkout')} className=" relative cursor-pointer hover:underline flex items-center">
            
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10"/>
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
       </div>
      </div>

        
        {/* bottom nav */}
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className='cursor-pointer hover:underline flex items-center'>
          <MenuIcon className='h-6 mr-1'/>
            All
            
          </p>
          <p className='cursor-pointer hover:underline'>Prime Video</p>
          <p className='cursor-pointer hover:underline'>Amazon Buisness</p>
          <p className='cursor-pointer hover:underline'>Today's Deals</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Electronics</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Food & Groceries</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Prime</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Buy Again</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Shopper ToolKit</p>
          <p className=' hidden cursor-pointer hover:underline lg:inline-flex'>Health & Personal Care</p>        
        </div>   
    </header>
  )
}

export default Header