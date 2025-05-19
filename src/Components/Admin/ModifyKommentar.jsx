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

            headers : {

                "X-Parse-Application-Id" : "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key" : "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

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

    //HF 

    function verendern() {

        const felirat = {

            key : key,

            text : text,

            objektId : id,

        }

        const option = {

            headers : {

                "X-Parse-Application-Id" : "tQRGq1dDgAmbR8jVTCEkhL3m3nOP39bSNqLSGi0i",

                "X-Parse-REST-API-Key" : "aftZIP1uMDxJeNF6iqi0j4oMHb5UZxaKCguukcxl",

                "Content-Type" : "application/json",

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

        <div>

            <h1>{id}</h1>
            
            <label>key: </label>
            <input value={key} type="text" onChange={(e) => setKey(e.target.value)}></input>

            <br/>
            <br/>

            <label>Text: </label>
            <input value={text} type="text" onChange={(e) => setText(e.target.value)}></input>

            <br/>
            <br/>  

            <button onClick={(event) => verendern()}>Modositas</button>

            <br/>
            <br/> 

            <button onClick={() => navigate("/")}>Zurück</button>                
            
        </div>

    </div >
}
export default Modify;