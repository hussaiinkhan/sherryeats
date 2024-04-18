import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

function Navbar() {

    const [nav, setNav] = useState(false)
    const handleMenu = ()=>{
        setNav(!nav)
    }
  return (
    <div className='w-max-[1640px] mx-auto flex justify-between items-center p-4'>

        {/* Left side */}

        <div className='flex items-center'>
            <div className='cursor-pointer'>
                <AiOutlineMenu size={25} onClick={handleMenu}/>    
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Sherry<span className='font-bold'>Eats</span></h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>

        {/* Search input */}
        
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'> 
            <AiOutlineSearch size={20}/>
            <input className='bg-transparent focus:outline-none p-2 w-full' type="text" placeholder='Search foods' />
        </div>

        {/* Cart button */}

        <button className='hidden md:flex items-center rounded-full bg-black text-gray-200 py-2'>
            <BsFillCartFill size={20} className='mr-2'/> Cart
        </button>

        {/* Mobile menu */ }
        {/* Overlay */ }

        <div className={nav?'bg-black/80 fixed w-full h-screen z-10 top-0 left-0':''}></div>

        {/* Side drawer menu */ }

        <div className={nav?'bg-white w-[300px] fixed top-0 left-0 h-screen z-10 duration-300':'hidden'}>
            <h2 className='text-3xl p-4'>Sherry<span className='font-bold'>Eats</span></h2>
            <AiOutlineClose onClick={handleMenu} size={20} className='absolute right-4 top-6 cursor-pointer'/>

            <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Navbar