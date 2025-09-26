import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Form.css';
import { body, object } from "framer-motion/client";

function Modify() {

    const { id } = useParams();

    const [key, setKey] = useState("");

    const [text, setText] = useState("");

    const navigate = useNavigate();

    useEffect(enderung, []);


    function enderung() {

        const option = {

            headers: {

                "X-Parse-Application-Id" : process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key" : process.env.REACT_APP_API_KEY,

            },
            method: "GET",
        }

        fetch(`https://parseapi.back4app.com/classes/Content?where={"objectId":"${id}"}`, option)
            .then(einlesen => einlesen.json())
            .then(einlesen => {
                console.log(einlesen)
                setKey(einlesen.results[0].key);
                setText(einlesen.results[0].text);
            })

    }

    
    function verendern() {

        const felirat = {

            key: key,

            text: text,

            objektId: id,

        }

        const option = {

            headers: {

                "X-Parse-Application-Id": process.env.REACT_APP_ID,

                "X-Parse-REST-API-Key": process.env.REACT_APP_API_KEY,

                "Content-Type": "application/json",

            },
            method: "PUT",

            body: JSON.stringify(felirat)
        }

        fetch(`https://parseapi.back4app.com/classes/Content/${id}`, option)
            .then(einlesen => einlesen.json())
            .then(() => alert("HILFE!!!!"))

        console.log(felirat);

    }


    return <div>

        <div className="Ramen">

            <h1>{id}</h1>

            <br />

            <label>key: </label>
            <input value={key} type="text" onChange={(e) => setKey(e.target.value)}></input>

            <br />
            <br />

            <label>Text: </label>
            <br />
            <textarea rows={5} cols={100} className="py-5 px-3" value={text} type="text" onChange={(e) => setText(e.target.value)}></textarea>

            <br />
            <br />

            <div className="Butten">

                <div>
                <button onClick={(event) => verendern()}>Modositas</button>
                </div>

                <br />
                <br />

                <div className="ml-8">
                <button onClick={() => navigate("/")}>Zurück</button>
                </div>

            </div>

        </div>

    </div >
}
export default Modify;