import React, { useEffect, useState } from 'react';
import './Form.css';
import App from '../../App';
import { useNavigate } from "react-router-dom";

function Kommentar() {

    const [key, setKey] = useState("");

    const [text, setText] = useState("");

    const [kommentaren, setKommentaren] = useState([]);

    const [statistik, setStatistik] = useState([]);

    const navigate = useNavigate();

    useEffect(auslesen, []);

    const [megjelenites, setMegjelenites] = useState([]);



    useEffect(fetchstatistik, [])

    function fetchstatistik() {

        const option = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,
            },

            method: "GET",
        }

        fetch(`https://parseapi.back4app.com/classes/Statistik`, option)
            .then(lekeres => lekeres.json())
            .then(daten => setStatistik(daten))
    }

    function lekeres() {

        const options = {

            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,

            },

            method: "GET"

        }

        fetch("https://parseapi.back4app.com/classes/Content", options)
            .then(valasz => valasz.json())
            .then(eredmeny => setMegjelenites(eredmeny.results))

    }

    //mentes
    function speichern() {

        const newText = {

            key: key,
            text: text,
        }

        const options = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,

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

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,
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

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,

            },

            method: "DELETE"
        }

        fetch(`https://parseapi.back4app.com/classes/Content/${kontent.objectId}`, option)
            .then(antwort => auslesen())

    }


    function azonosito(kontent) {
        console.log(kontent.objectId)
        alert(kontent.objectId)
    }


    return <div className='m-8'>        

        <table>

            <thead className='bg-blue-100' >
                <tr>
                    <th>key</th>
                    <th>text</th>
                    <th>Ansicht-ID</th>
                    <th>Löschen</th>
                    <th>Verendern</th>

                </tr>
            </thead>

            <tbody>

                {kommentaren.results?.map((kontent, index) =>
                    <tr key={index}>

                        <td>{kontent.key}</td>
                        <td>{kontent.text}</td>
                        <td><button onClick={() => azonosito(kontent)}>👀 ID</button></td>
                        <td><button onClick={() => löschen(kontent)}> Löschen </button></td>
                        <td><button onClick={() => navigate(`/Modify/${kontent.objectId}`)}> Verendern </button></td>

                    </tr>
                )}

            </tbody>

        </table>

        <br />

        <div>

            <div className='flex flex-row'>
                <div>

                <label className='ml-2'>Key: </label>
                <input className='janosbutton' onChange={(e) => setKey(e.target.value)} value={key}></input>

                </div>

                <br />

                <label className='ml-2' >Text: </label>
                <textarea className='janosbutton' onChange={(e) => setText(e.target.value)} value={text}></textarea>

                <br />
                <br />

            </div>

            <div className='Butten'>

                <div className='me-8'>
                    <button className='janosbutton' onClick={speichern}>Speichern</button>
                </div>

                <div>
                    <button className='janosbutton' onClick={() => navigate("/")}>Zurück</button>
                </div>

            </div>

            <br />
            <br />
        </div>

        <div>
            <table className='border 2px' >

                <thead className='bg-blue-100' >
                    <tr>
                        <th>Name</th>
                        <th>Zahlen</th>
                    </tr>
                </thead>

                <tbody>

                    {statistik.results?.map((statistiken, index) =>
                        <tr key={index}>

                            <td>{statistiken.Name}</td>
                            <td>{statistiken.Szam}</td>

                        </tr>
                    )}

                </tbody>

            </table>

        </div>

    </div>

}
export default Kommentar;