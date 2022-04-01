import React, {EventHandler, FormEventHandler, useState} from "react";
import "./form.css";

interface Props {
    giveName:(name:string)=>void;
}

export const Form = (props:Props) => {

    const [city,setCity] = useState<string>("");

    const sendCity = (e : React.FormEvent) => {

        e.preventDefault();

        if(city!==""){
            props.giveName(city);
        }
        else{
            return;
        }
    }

    return <form action="" onSubmit={sendCity} className="formDiv">
        <h3>Type country name</h3>
        <div className="searchDiv">
            <input
                type="text"
                onChange={e=>setCity(e.target.value)}
                value={city}
            />
            <button type="submit">Confirm</button>
        </div>
        </form>
}