import React from 'react';

const Cards = (props)=>{


    
    const { country} = props; //on a fait du destructuring, {country} va renvoyé props.country
   
    const numberFormat = (x) =>{ //fonction séparateur de milliers
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };



    return(
        <li className='cards'>
            <img src={country.flag} alt='flag'/>
            <div className='data-container'>
                <ul>
                    <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>Pop: {numberFormat(country.population)}</li>
                </ul>
                
            </div>
        </li>
    )
}
export default Cards;