import React, { useEffect } from 'react'
import { Styles } from '../utils/Style';
import Profile from '../assests/fox.png';
import Resume from '../assests/Janos_Tarcsai_Lebenslauf.pdf';
import { TiArrowDownOutline } from "react-icons/ti";
import '../App.css';
import { header } from 'framer-motion/m';


// Grundmaske mit Bild und Lebenslauf

function About() {

    useEffect(neuLaden, [])

    //Lebenslauf Statistik runterladen

    function download() {

        const option = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,
            },

            method: "GET"

        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/?where={"objectId":"${process.env.REACT_APP_LETOLTES_ID}"}`, option)
            .then(lekeres => lekeres.json())
            .then(daten => daddieren(daten.results[0]))

    }
    

    function daddieren(StatistikObjekt) {

        StatistikObjekt.Szam += 1;

        delete StatistikObjekt.Name;
        delete StatistikObjekt.createdAt;
        delete StatistikObjekt.updatedAt;

        const option = {
            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,

                "Content-Type": "application/json",

            },
            method: "PUt",
            body: JSON.stringify(StatistikObjekt)
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/${StatistikObjekt.objectId}`, option)
            .then(lekeres => lekeres.json())
    }

    //Seite neuladen und in Statistik +1 Erhöhen

    function neuLaden() {

        const option = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,
            },
            method: "GET",
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/?where={"objectId":"${process.env.REACT_APP_MEGNYITAS_ID}"}`, option)
        .then(lekeres => lekeres.json())
            .then(daten => sneuLAden(daten.results[0]))
    }

    function sneuLAden(StatistikObjekt) {

        StatistikObjekt.Szam += 1;

        delete StatistikObjekt.Name;
        delete StatistikObjekt.createdAt;
        delete StatistikObjekt.updatedAt;

        const option = {
            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,

                "Content-Type": "application/json",

            },
            method: "PUt",
            body: JSON.stringify(StatistikObjekt)
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/${StatistikObjekt.objectId}`, option)
            .then(lekeres => lekeres.json())
    }

    //Kommentar Statistik 

    function skommentar() {

        const option = {

            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_API_KEY,
            },

            method: "GET",
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/?where={"objectId":"${process.env.REACT_APP_KOMMENTAR_ID}"}`, option)
        .then(lekeres => lekeres.json())
            .then(daten => sneukommentar(daten.results[0]))
    }

    function sneukommentar(StatistikObjekt) {

        StatistikObjekt.Szam += 1;

        delete StatistikObjekt.Name;
        delete StatistikObjekt.createdAt;
        delete StatistikObjekt.updatedAt;

        const option = {
            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_API_KEY,

                "Content-Type": "application/json",

            },
            method: "PUt",
            body: JSON.stringify(StatistikObjekt)
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik/${StatistikObjekt.objectId}`, option)
            .then(lekeres => lekeres.json())
    }

    
    return (
        <div className='flex flex-wrap justify-evenly items-center p-10' id='Home'>

            <div className='flex-wrap py-4'>

                <span className={Styles.wortStyle.heroHeadText}>
                    Hi, ich bin <span className='text-orange-600'>János!</span>
                </span>

                <br />

                <span className={Styles.wortStyle.heroSubText}>
                    Ich bin froh, dass du mich besucht hast.
                </span>

                <br />
                <br />

                <div className='w-[14rem]'>

                    <a
                        href={Resume}
                        download="Janos_Tarcsai_Lebenslauf"
                        target='blank'
                        rel="noreferrer"
                        onClick={download}
                    >
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-600 flex justify-center border-2 border-orange-500 hover:border-blue-500 shadow-lg hover:shadow-blue-500'>
                            <TiArrowDownOutline className='text-lg mr-3 mt-1 text-black-500'></TiArrowDownOutline>Lebenslauf
                        </div>
                    </a>

                </div>

            </div>



            <div className='flex flex-wrap'>

                <img src={Profile} alt='profile' className='element object-contain p-4 foto' />

            </div>

        </div>
    )
}
export default About;