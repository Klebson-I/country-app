import React from "react";
import "./results.css";

interface Props {
    capital:string[]
}

export const CapitalString = (props:Props) => {

    const capitalString=props.capital.join(", ");
    return <p className="capitalString">
        {capitalString}
    </p>
}