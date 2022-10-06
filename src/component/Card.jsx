import React from "react";
import  './Card.css';

const Card =  (filmsData) =>{
    filmsData.filmsData.map(item => {console.log(item)})
    const convertTime = (time) => {

    }
    return (
        <>
        {filmsData.filmsData.map(field => (<li >{field.title} ({field.duration})</li>))}
        </>
        )

}

export default Card