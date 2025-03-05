 import React from 'react';
 import Tilt from 'react-parallax-tilt';
 import { Styles } from '../utils/Style';
 import { technologies, services } from '../Constants';
 //import { motion } from 'framer-motion';
 import './style.css';

 function OverView() {
    return(
        <div>
            <div className='flex-row items-center pl-5 justify-center pt-12' id='Overview'>

                <span className={Styles.wortStyle.sectionHeadText}>
                    Vorstellung
                </span>

                <hr className='w-[35%]'></hr>

                <div className={Styles.wortStyle.sectionText}>
                    Hier siehst du die Technologien, mit denen ich bisher gearbeitet habe und welche ich gerade erlerne.
                </div>

            </div>

            <div className='flex flex-wrap justify-center'>

                {services.map((service, index) => (
                        <div key={index}>
                            <Tilt
                                key={service.icon}
                                className="parallax-effect-glare-scale"
                                perspective={500}
                                glareColor="blue"
                                glareEnable={true}
                                glareMaxOpacity={0.50}
                                sale={1.02}
                                gyroscope={true}>
                                    <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                                        <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title}/>

                                        <div className='m-5 text-blue-500'>
                                            {service.title}
                                        </div>

                                    </div>
                            </Tilt>
                        </div>
                    ))
                }
            </div>         
            
            <div className="flex flex-wrap justify-center items-center" >
                {technologies.map((technology)=>
                (<div 
                    key={technology.name}
                    className='m-4 mt-5 h-[100px] w-[100px] rounded-3x1 shadow-2xl border-[1px] border-blue-400 hover:shadow-blue-500'
                    >
                    <img className='p-2' src={technology.icon} alt={technology.name}/>
                    <div className='text-blue-600 justify-center flex'>
                        {technology.name}
                    </div>
                 </div>)
                )}
            </div>           

        </div>
    )
 }
 export default OverView;