import React, { useEffect, useState } from 'react';
import './Form.css';
import Contact from '../Contact';

function Login() {

    const [benutzer, setBenutzer] = useState("");

    const [password, setPassword] = useState("");

    const [speichern, setSpeichern] = useState({});
    

    //Bejelentkezes
    function anmelden() {
        
        const options = {

            headers: {

                "X-Parse-Application-Id": "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key": "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

                "Content-Type": "application/json",

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
            })
    }

    return <div>        

        <h1>Login</h1>
        <br/>

        Benutzer: <input onChange={(e) => setBenutzer(e.target.value)} value={benutzer}></input>
        <br/>
        <br/>
        Kennwort: <input type='password' onChange={(e) => setPassword(e.target.value)} value={password}></input>       
        <br/>
        <br/>
        <button onClick={anmelden}>login</button> 
        <br/>
        <br/>
        <button onClick={() => {}}>Zurück</button> 

    </div>
}
export default Login;