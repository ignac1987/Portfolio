import React from 'react';
//import { BiSolidPhoneCall } from 'react-icons/bi';
import {GrGithub, GrLinkedinOption} from 'react-icons/gr';
import { FaXing } from "react-icons/fa";

function Foot() {
  return (
    <div>
        <div className='flex flex-row justify-evenly w-[screen] bg-neutral-900'>
            <div className='flex flex-row p-2 flex-wrap justify-left'>

                <a href='https://www.linkedin.com/in/janos-tarcsai-5b8a211b1/' target='black' className='text-lg flex flex-row text-blue-300 '>

                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-blue-400'>
                    <GrLinkedinOption className="text-white"></GrLinkedinOption>

                </div>

                <span className='text-white ml-1 mt-[0.1rem]'>Linkedin</span>
                </a>

            </div>

            <div className='flex flex-row p-2 flex-wrap justify-left'>

                <a href='https://www.xing.com/profile/Tarcsai_Janos/web_profiles' target='black' className='text-lg flex flex-row text-blue-300 '>

                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-blue-400'>
                    <FaXing  className="text-white"></FaXing >

                </div>

                <span className='text-white ml-1 mt-[0.1rem]'>Xing</span>
                </a>

            </div>

            <div className='flex flex-row p-2 flex-wrap justify-left'>

                <a href='https://github.com/ignac1987' target='black' className='text-lg flex flex-row text-blue-300 '>

                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-blue-400'>
                    <GrGithub className="text-white"></GrGithub>

                </div>

                <span className='text-white ml-1 mt-[0.1rem]'>GitHub</span>
                </a>

            </div>

            {/* 
            <div className='flex flex-row p-2 flex-wrap justify-left'>

                <a href='' target='black' className='text-lg flex flex-row text-white-300'>

                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-blue-400'>
                    <GrMail className="text-white"></GrMail>

                </div>

                <span className='text-white ml-1 mt-[0.1rem]'>janos.tarcsai@gmail.com</span>
                </a>

            </div>  
                      

            <div className='flex flex-row p-2 flex-wrap justify-left'>

                <a href='Contact' target='black' className='text-lg flex flex-row text-blue-300 '>

                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-blue-400'>

                    <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>

                </div>

                <span className='text-white ml-1 mt-[0.1rem]'>+49 1590 2624276</span>

                </a>

            </div>
            */}            
            
        </div>
    </div>
  )
}

export default Foot;