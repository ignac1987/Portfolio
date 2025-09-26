import React, { useState } from 'react';
import { Styles } from '../utils/Style';
import contact from '../assests/Connect.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { output } from 'framer-motion/m';
import { useRef } from 'react';

function Contact() {

  const [name, setName] = useState("");
  const [emailfrom, setEmailfrom] = useState("");
  const [message, setMessage] = useState("");
  const [speak, setSpeak] = useState("");

  //Email Senden Einstellung
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pklthn9', 'template_jb5pgsm', e.target, '7q9eYGjdgEtEDqgJx');

    setName("");
    setMessage("");
    setEmailfrom("");
    notify();
    setSpeak("");
  }

  //Toastify
  const notify = () => toast.success("Wurde gesendet!");  

  // Kommentar Statistik 

  function skommentar() {

    const option = {

      headers: {

        "X-Parse-Application-Id" : process.env.REACT_APP_ID,

        "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,
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

        "X-Parse-Application-Id" : process.env.REACT_APP_ID,

        "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,

        "Content-Type" : "application/json",

      },
      method: "PUt",
      body: JSON.stringify(StatistikObjekt)
    }

    fetch(`https://parseapi.back4app.com/classes/Statistik/${StatistikObjekt.objectId}`, option)
      .then(lekeres => lekeres.json())
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  
  const recognition = useRef(new SpeechRecognition())

  function startSprechen() {

    recognition.current.lang = 'de-DE';
    recognition.current.interimResults = true;
    recognition.current.continuous = true;
    recognition.current.start();

    recognition.current.onresult = (event) => { console.log(event); setSpeak(event.results[0][0].transcript) };
  }

  function stopSprechen() {
    recognition.current.stop();
  }


  return <div>
    <ToastContainer />
    <div className='flex-row items-center pl-5 justify-center pt-12' id='Contact'>

      <span className={Styles.wortStyle.sectionHeadText}>
        Kontakt
      </span>

      <hr className='w-[35%]'></hr>

    </div>

    <div className='mt-5'>
      <div className='flex flex-wrap flex-row justify-around'>
        <div className='lg:w-[40%]'>
          <form className='m-5 flex flex-col gap-3' onSubmit={sendEmail}>

            <label className='flex flex-col gap-3'>

              <span className='text-blue-[700] font-medium mb-2'>
                Name:
              </span>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                name='name'
                id='name'
                placeholder='Deine Name'
                className=' bg-blue-200 py-4 px-6 placeholder:text-secondary text-blue-500 rounded-lg outline-none border-none font-medium'
              >
              </input>

            </label>

            <label className='flex flex-col gap-3'>

              <span className='text-blue-[700] font-medium mb-2'>
                E-Mail Adresse:
              </span>

              <input
                onChange={(e) => setEmailfrom(e.target.value)}
                value={emailfrom}
                name='email_from'
                id='emailfrom'
                placeholder='Deine E-Mail Adresse'
                className=' bg-blue-200 py-4 px-6 placeholder:text-secondary text-blue-500 rounded-lg outline-none border-none font-medium'
              >
              </input>

            </label>

            <label className='flex flex-col gap-3'>

              <span className='text-blue-[700] font-medium mb-2'>
                Deine Nachricht:
              </span>

              <textarea
                //onChange={(e) => setMessage(e.target.value)}                
                //value={message}
                onChange={(e) => setSpeak(e.target.value)}
                value={speak}
                row={20}
                name='message'
                id='message'
                placeholder='Nachricht'
                className=' bg-blue-200 py-8 px-6 placeholder:text-secondary text-blue-500 rounded-lg outline-none border-none font-medium'
              >
              </textarea>

            </label>

            <div className='Button'>

              <button
                type='submit'
                variant="contained"
                className='bg-slate-100 hover:shadow-blue-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-medium shadow-md shadow-primary'
                onClick={skommentar}
              >
                Senden

              </button>

              
              <input
                onMouseDown={startSprechen}
                onMouseUp={stopSprechen}
                className='bg-slate-100 hover:shadow-blue-300 py-3 px-4 mb-4 m-4 rounded-xl outline-none w-fit text-black font-medium shadow-md shadow-primary'
                type='button'
                variant="contained"
                placement="bottom"
                hide="false"                
                intro="Push to talk"
                value={"🎙️"}                

              />

            </div>

          </form>

        </div>

        <div className='lg:w-[50%]'>

          <img src={contact} alt='any img' />

        </div>

      </div>
    </div>
  </div>

}

export default Contact