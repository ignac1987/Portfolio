import React, { useEffect, useState } from 'react';
import './Form.css';
import App from '../../App';
import { useNavigate } from "react-router-dom";

function Kommentar() {

    const [key, setKey] = useState("");

    const [text, setText] = useState("");

    const [kommentaren, setKommentaren] = useState([]);

    const [einfüggen, setEinfüggen] = useState([]);
  
    const navigate = useNavigate();

    useEffect(auslesen, []);

    //mentes
    function speichern() {

        const newText = {

            key: key,
            text: text,
        }

        const options = {

            headers: {

                "X-Parse-Application-Id": "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key": "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

                "Content-Type": "application/json",

            },

            method: "POST",
            body: JSON.stringify(newText)
        }

        fetch("https://parseapi.back4app.com/classes/Content", options)
            .then(lesen => lesen.json())
            .then(daten => {
                setKey("")
                setText("")
                auslesen()
            }
            )
    }

    //kiolvasas
    function auslesen() {

        const options = {

            headers: {

                "X-Parse-Application-Id": "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key": "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

            },

            method: "GET"

        }

        fetch("https://parseapi.back4app.com/classes/Content", options)
            .then(antwort => antwort.json())
            .then(daten => setKommentaren(daten))

    }

    function azonosito(kontent) {
        console.log(kontent.objectId)
        alert(kontent.objectId)
    }

    //törles
    function löschen(kontent) {

        const option = {

            headers: {

                "X-Parse-Application-Id": "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key": "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl"

            },

            method: "DELETE"
        }

        fetch(`https://parseapi.back4app.com/classes/Content/${kontent.objectId}`, option)
            .then(antwort => auslesen())

    }

    //Modositas
    function verendern(kontent) {

        const options = {

            headers: {

                "X-Parse-Application-Id" : "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key" : "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

                "Content-Type" : "application/json",

            },

            method: "PUT"

        }

        fetch(`https://parseapi.back4app.com/classes/Content${kontent.objectId}`, options)
            .then(antwort => antwort.json())
            .then(daten => setEinfüggen(daten))

    }

    function azonosito(kontent) {
        console.log(kontent.objectId)
        alert(kontent.objectId)
    }

    return <div>

        { localStorage.getItem("jwt") == null ? <h1>Kerlek jelentkezz be!</h1> : <h1>Sikeresen bejelentkeztel!</h1> }
        

        <table>

            <thead>
                <tr>

                    <td>key</td>
                    <td>text</td>
                    <td>Ansicht-ID</td>
                    <td>Löschen</td>
                    <td>Verendern</td>

                </tr>
            </thead>

            <tbody>

                {kommentaren.results?.map((kontent, index) =>
                    <tr key={index}>

                        <td>{kontent.key}</td>
                        <td>{kontent.text}</td>
                        <td><button onClick={() => azonosito(kontent)}>👀 ID</button></td>
                        <td><button onClick={() => löschen(kontent)}> Löschen </button></td>
                        <td><button onClick={() => verendern(kontent)}> Verendern </button></td>

                    </tr>
                )}

            </tbody>

        </table>

        <br />

        <label>Input: </label>
        <input onChange={(e) => setKey(e.target.value)} value={key}></input>

        <br />

        Text: <br />
        <textarea onChange={(e) => setText(e.target.value)} value={text}></textarea>

        <br />

        <button onClick={speichern}>Speichern</button>
        <br/>
        <br/>
        <button onClick={() => navigate("/")}>Zurück</button>
        <br/>
        <br/>

    </div>

}
export default Kommentar;