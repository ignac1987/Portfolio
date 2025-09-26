import React, { useEffect, useState } from 'react';
import './Form.css';
import Contact from '../Contact';
import { useNavigate } from "react-router-dom";

function Login() {

    const [benutzer, setBenutzer] = useState("");

    const [password, setPassword] = useState("");

    const [speichern, setSpeichern] = useState({});

    const navigate = useNavigate();


    //Bejelentkezes
    function anmelden() {

        const options = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,

                "Content-Type" : "application/json",

                "X-Parse-Revocable-Session" : 1,
            },

            method: "POST",
        }

        //Request parameterek a "?username=${benutzer}&password=${password}" <= ezek!
        fetch(`https://parseapi.back4app.com/login?username=${benutzer}&password=${password}`, options)
            .then(antwort => antwort.json())
            .then(daten => {
                setSpeichern(daten);
                localStorage.setItem("jwt", daten.sessionToken)
                localStorage.setItem("user", daten.username)
                localStorage.setItem("id", daten.objectId)
                navigate("/")
            })

    }

    return <div>

        <div className='flex justify-centerf flex-col'>

            <div className='flex justify-center flex-row'> 

                <table className='border 2px mt-10'>
                    <thead className='bg-blue-100'>
                        <tr>
                            <th>
                                <h1 className='m-2'>Login</h1>
                            </th>
                        </tr>                        
                    </thead>

                    <tbody>
                        <tr>
                            <th>
                                <br />
                                Benutzer: <input className='border 2px rounded-xl bg-gray-200' onChange={(e) => setBenutzer(e.target.value)} value={benutzer}></input>
                                <br />
                                <br />
                                Kennwort: <input className='border 2px rounded-xl bg-gray-200' type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>
                                <br />
                                <br />
                            </th>
                        </tr>
                    </tbody>

                </table>

            </div>

            <div className='Butten flex justify-center flex-row'>

                <button className='m-8 p-2 border color-black rounded-xl bg-gray-200 shadow-xl/30' onClick={anmelden}>Login</button>
                
                <button className='m-8 p-2 border color-black rounded-xl bg-gray-200' onClick={() => navigate("/")}>Zurück</button>                

            </div>

        </div>

    </div >
}
export default Login;