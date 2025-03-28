import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from 'react-icons/bs';
import { FaUserAlt, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

function NavBar() {
    const [nav,setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      <div className='flex items-center'>

   <div className='cursor-pointer' onClick={()=> setNav(!nav)}>
     <AiOutlineMenu size={30}/> 
   </div>
   
  
             <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
    Best <span className='font-bold'>Eats</span>
  </h1>
  <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>

    <p className='rounded-full bg-black text-white p-2'>Delivery</p>
    <p className='rounded-full p-2'>Pickup</p>
  </div>
    </div>

<div className='bg-gray-200 rounded-full flex items-center px-2  w-[200px] sm:w-[400px] lg:w-[500px]'>
    <AiOutlineSearch size={25}/
    >
        <input type='text' className='bg-transparent p-2 w-full focus:outline-none' placeholder='search food'></input>
</div>
{/* 
card button */}

<button className=' bg-black rounded-full text-white hidden md:flex items-center py-2'> 
    <BsFillCartFill size={20} className='mr-2'/>Cart
</button>

{nav ?<div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>:''}


   <div onClick={()=>setNav(!nav)} className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
    <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer'/>
<h2 className='text-2xl p-4'>
    Best <span className='font-bold'>Eats</span>
</h2>
<nav>
    <ul className='flex flex-col p-4 text-gray-800'>
        <li className='text-xl py-4 flex' ><TbTruckDelivery size={25} className='mr-2'/>Orders</li>
        <li className='text-xl py-4 flex' ><MdFavorite size={25} className='mr-2'/>Favorites</li>
        <li className='text-xl py-4 flex' ><FaWallet size={25} className='mr-2'/>Wallet</li>
        <li className='text-xl py-4 flex' ><MdHelp size={25} className='mr-2'/>Help</li>
        <li className='text-xl py-4 flex' ><AiFillTag size={25} className='mr-2'/>Promotion</li>
        <li className='text-xl py-4 flex' ><BsFillSafeFill size={25} className='mr-2'/>Best one</li>
        <li className='text-xl py-4 flex' ><FaUserAlt size={25} className='mr-2'/>Invite friends</li>
       
    </ul>
</nav>
   </div>
   
   </div>
  )
}

export default NavBar