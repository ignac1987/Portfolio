import React, { useState } from 'react'
import Kocsog from '../assests/konyv.png';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {

        setIsOpen(!isOpen);
    }

    return (
        <div>

            <nav className='fixed w-full z-20 top-0 bg-blue-100 bg-opacity-80 '>
                <div className='max-w-screen-xl flex flex-row mx-auto p-2'>
                    <img src={Kocsog} className='h-8 ml-4' alt='LOGO'/>                    

                    <div className=' flex md:order-2'>
                        <button onClick={toggle} className='inline-flex items-cener p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-2 focus:ring-gray-200'  >
                            <AiOutlineMenuUnfold className='text-blue-400 text-lg'>

                            </AiOutlineMenuUnfold>
                        </button>

                    </div>

                    <div className={`items-center ms-6 justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'
                        } `}>
                        <ul className={` flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${isOpen ? 'bg-blue-100 bg-opacity-70' : ''
                            } `}>

                            <Link spy={true} to='Home' activeClass='activeClass'>
                                <li>
                                    <div className='block py-2 pl-2 pr-4 rounded md:p-0 hover:text-orange-600 text-blue-700  '>Home</div>
                                </li>
                            </Link>

                            <Link spy={true} to='Overview'>
                                <li>
                                    <div className='block py-2 pl-2 pr-4 rounded md:p-0 hover:text-orange-600 text-blue-700  '>Über mich</div>
                                </li>
                            </Link>

                            <Link spy={true} to='Projects'>
                                <li>
                                    <div className='block py-2 pl-2 pr-4 rounded md:p-0 hover:text-orange-600 text-blue-700  '>Projekten</div>
                                </li>
                            </Link>

                            <Link spy={true} to='Contact' activeClass='activeClass'>
                                <li>
                                    <div className='block py-2 pl-2 pr-4 rounded md:p-0 hover:text-orange-600 text-blue-700  '>Kontakt</div>
                                </li>
                            </Link>

                        </ul>
                    </div>

                </div>

            </nav>

        </div>
    )
}

export default Navbar