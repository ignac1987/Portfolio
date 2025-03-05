import React from 'react'
import { Styles } from '../utils/Style';
import Profile from '../assests/fox.png';
import Resume from '../assests/Janos_Tarcsai_Lebenslauf.pdf';
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css';


// Grundmaske mit Bild und Lebenslauf

function About() {
    return (
        <div className='flex flex-wrap justify-evenly items-center p-10' id='Home'>

            <div className='flex-wrap py-4'>

                <span className={Styles.wortStyle.heroHeadText}>
                    Hi, ich bin <span className='text-orange-600'>János!</span>
                </span>

                <br/>

                <span className={Styles.wortStyle.heroSubText}>
                    Ich bin froh, dass du mich besucht hast.
                </span>

                <br/>
                <br/>

                <div className='w-[14rem]'>

                    <a
                        href={Resume}
                        download="Janos_Tarcsai_Lebenslauf"
                        target='blank'
                        rel="noreferrer"
                    >
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-600 flex justify-center border-2 border-orange-500 hover:border-blue-500 shadow-lg hover:shadow-blue-500'>
                            <TiArrowDownOutline className='text-lg mr-3 mt-1 text-black-500'></TiArrowDownOutline>Lebenslauf
                        </div>

                    </a>

                </div>

            </div>

            <div className='flex flex-wrap'>

                <img src={Profile} alt='profile' className='element object-contain p-4 foto'/>

            </div>

        </div>
    )
}
export default About;