import React, { useEffect, useState } from 'react';
import {Row,Col,Card } from 'react-bootstrap';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    const [countries,setCountries] = useState([]);
    const[display,setDisplay] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data => {
            setCountries(data);
            setDisplay(data);
        } )
    },[])
    //search function
    const handleSearch = (event)=> {
        const search = event.target.value;
        const matched = countries.filter((country)=> country.name.common.toLowerCase()
            .includes(search.toLowerCase()));
        setDisplay(matched);
    }
    return (
        <div>
            <div className='countryStyle' >
                <br />
                <h2>Total countries : {countries.length}</h2> <br />
                <input onChange={handleSearch} type="text" placeholder='Search country here' /> <br /><br /> 
            </div> <br /><br />
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {
                    display.map((country)=> <Country 
                    key={country.name.common} 
                    country={country}
                    ></Country>  )
                }
            </Row>
        </div>
    );
};
export default Countries;