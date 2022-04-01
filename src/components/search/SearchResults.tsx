import React from 'react';
import {CityEntity} from "../../types/city";
import "./results.css";
import {CapitalString} from "./CapitalString";
import {LanguagesString} from "./LanguagesString";

interface Props {
    data:CityEntity;
}

export const SearchResults = (props:Props) => {
    return <div className="resultsDiv">
        <div className="countryNameDiv">
            <h5>Country name : </h5>
            <p>{props.data.countryName}</p>
        </div>
        <div className="subregionDiv">
            <h5>Subregion : </h5>
            <p>{props.data.subregion}</p>
        </div>
        <div className="flagDiv">
            <img src={props.data.flag} alt=""/>
        </div>

        <div className="coatOfArmsDiv">
            <img src={props.data.coatOfArms} alt=""/>
        </div>

        <div className="coordsDiv">
            <h5>Coords : </h5>
            <p>Lat {props.data.latitude}° | Long {props.data.longitude}°</p>
        </div>
        <div className="capitalDiv">
            <h5>Capital : </h5>
            <CapitalString capital={props.data.capital}/>
        </div>
        <div className="languageDiv">
            <h5>Languages : </h5>
            <LanguagesString languages={props.data.languages}/>
        </div>
    </div>
}