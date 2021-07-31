import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
const Contries = ()=>{

    const [data,setData] = useState([]);
    const [sortedData,setSortedData]= useState([]);
    const [playOnce,setPlayOnce]=useState(true);
    const [rangeValue,setRangeValue] = useState(40);
    const [selectedRadio,setSelectedRadio]=useState('');
    const radios = ['Africa','America','Asia','Europe','Oceania'];

    useEffect(()=>{
        if(playOnce){
             //pour utiliser axios, il faut mettre dans le terminal << npm install -s axios >>
        axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
                .then((response)=>{
                    setData(response.data);
                    setPlayOnce(false);
                });
        }
       
        

        const sortedCountry = () =>{
            const countryObj = Object.keys(data).map((i)=>data[i]);
            const sortedArray = countryObj.sort((a,b)=>{
                return b.population - a.population;
            });
            sortedArray.length=rangeValue;
            setSortedData(sortedArray);
        }
        sortedCountry();
    },[data,rangeValue, playOnce]);

    
    return(
        <div className='countries'>
            <div className='sort-container'>
                <input type='range' min='1' max='250' value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>

                <ul>
                    {radios.map((radio)=>{
                        return (
                             <li key={radio}>
                            <input type='radio' value={radio} id={radio} 
                            checked={radio === selectedRadio} onChange={(e)=>setSelectedRadio(e.target.value)}/>
                            <label htmlFor={radio}>{radio}</label>
                        </li>
                        );
                       
                    })};
                </ul>
            </div>
            
            <div className='cancel'>
                {selectedRadio && <h5 onClick={()=>setSelectedRadio('')}>Annuler recherche</h5>};
            </div>

            <ul className='countries-list'>
                {sortedData
                .filter((country)=>country.region.includes(selectedRadio))
                .map((country)=>(
                <Cards country ={country} key={country.name} /> //avec country on a crée un props, on a envoyé les donnéesde Country dans Cards
                ))}
            </ul>
            
        </div>
    )
}
export default Contries;