import React from "react";
import { Styles } from "../utils/Style";
import { projects } from "../Constants";
import Tilt from 'react-parallax-tilt';
import { SiGithub } from "react-icons/si";

function Projects() {
    return (
        <div>
            <div className='p-3 mt-4 pt-12' id='Projects'>

                <span className={Styles.wortStyle.sectionHeadText}>
                    Projekten
                </span>

                <hr className='w-[35%]'></hr>

                <div className={Styles.wortStyle.sectionText}>
                    Hier bekommst du ein Überblick, wie ich mein Wissen vermehrt und meine Fähigkeiten weiterentwickelt habe.
                    Ich hoffe, dass ich durch meine Aufgaben dein Interesse an einer möglichen zukünftigen Zusammenarbeit wecken kann.
                </div>

            </div>

            <div className='flex flex-wrap p-8 justify-evenly items-center'>

                {projects.map((project) =>
                (
                    <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 item-center hover:shadow-2xl hover:sadow-blue-400 shadow-blue-300 p-3 rounded-xl border-2 border-blue-900'>

                        <div className='flex h-full justify-center items-center mb-3 flex-col'>

                            <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-blue-500 flex justify-center items-center'>

                                <a href={project.source_code_lik} target='blank'>

                                    <SiGithub className="text-3xl font-bold text-blue-600"></SiGithub>

                                </a>

                            </div>

                            <div className="flex-1">
                                <div className="justify-center">
                                <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center border-2 border-blue-400 rounded-2xl' />
                                </div>
                                <div className='text-center text-2xl text-blue-600 font-extrabold'>
                                    {project.name}
                                </div>

                                <div className='text-center'>

                                    <span className='text-blue-500'>

                                        {project.description}

                                    </span>

                                </div>
                            </div>

                        </div>

                    </Tilt>
                ))}

            </div>

        </div>
    )
}
export default Projects;