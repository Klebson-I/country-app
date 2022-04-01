import React from "react";
import "./results.css";

interface Props {
    languages:string[];
}

export const LanguagesString = (props : Props) => {
    const languageString=props.languages.join(", ");
    return <table className="languageTable">
        <thead>
        <tr>
            {
                props.languages.map(lang=>{
                    return <th key={lang}>
                        {lang}
                    </th>
                })
            }
        </tr>

        </thead>

    </table>
}