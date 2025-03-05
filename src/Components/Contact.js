import React, { useState } from 'react';
import { Styles } from '../utils/Style';
import contact from '../assests/Connect.png';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {

  const [name, setName] = useState("");
  const [emailfrom, setEmailfrom] = useState("");
  const [message, setMessage] = useState("");
  
  //Email Senden Einstellung
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pklthn9', 'template_jb5pgsm', e.target, '7q9eYGjdgEtEDqgJx');

    setName("");
    setMessage("");
    setEmailfrom("");
    notify();
  }

  //Toastify
  const notify = () => toast.success("Wurde gesendet!");  

  return (
    <div>
      <ToastContainer/>      
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
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  row={20}
                  name='message'
                  id='message'
                  placeholder='Nachricht'
                  className=' bg-blue-200 py-8 px-6 placeholder:text-secondary text-blue-500 rounded-lg outline-none border-none font-medium'
                >
                </textarea>

              </label>

              <button
                type='submit'
                variant="contained"
                className='bg-slate-100 hover:shadow-blue-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-black font-medium shadow-md shadow-primary'
              >
                Senden

              </button>

            </form>

          </div>

          <div className='lg:w-[50%]'>

            <img src={contact} alt='any img' />

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact