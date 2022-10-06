import React from "react";
import  './Card.css';

const Card =  ({filmsData,timeFilter}) =>{
    filmsData.map(item => {console.log(item)})
    const convertTime = (time) => {
        const [hr, dummy1, min, dummy2] = time.split(" ")
        const seconds = (parseInt(hr) * 3600) + (parseInt(min) * 60)
        return seconds
    }
    filmsData.map(field => console.log(convertTime(field.duration)))
    const filteredMovies = filmsData.filter(field =>
        convertTime(field.duration) > timeFilter.value)
    console.log(filteredMovies)
    return (
        <>
        {filteredMovies.map(field => (<li >{field.title} ({convertTime(field.duration)})</li>))}
        </>
        )

}

export default Card
