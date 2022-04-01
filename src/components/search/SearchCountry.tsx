import React, {useEffect, useState} from 'react';
import {CityEntity} from "../../types/city";
import {Form} from "./Form";
import {SearchResults} from "./SearchResults";
import {LoadAnimate} from "./LoadAnimate";
import "./SearchCountry.css";

export const SearchCountry = () => {

    const [data,setData] = useState<CityEntity|null>(null);
    const [name,setName]=useState<string>("");
    const [isLoading,setIsLoading]=useState<boolean>(false);

    const getData = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const rawData = (await res.json())[0];
        if(rawData===undefined){
            setIsLoading(false);
            return;
        }
        setData({
            countryName:rawData.name.common,
            capital:rawData.capital,
            coatOfArms:rawData.coatOfArms.png,
            flag:rawData.flags.png,
            languages:Object.values(rawData.languages),
            latitude:rawData.latlng[0],
            longitude:rawData.latlng[1],
            subregion:rawData.subregion
        })
        setIsLoading(false);
    }

    const giveName = (newName:string) => {
        if(newName!==name){
            setIsLoading(true);
            setData(null);
            setName(newName);
        }
    };

    useEffect(()=>{
        (async()=>{
            if(name!=="")await getData();
        })();
    },[name])


    return <div className="app-container">
        <Form giveName={giveName}/>
        <br/>
        {
            data && <SearchResults data={data}/>
        }
        {
            isLoading && <LoadAnimate/>
        }
    </div>

}