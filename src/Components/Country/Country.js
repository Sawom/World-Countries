import React from 'react';
import './Country.css';
import {Row,Col,Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const Country = (props) => {
    const{name,flags,capital,population,region,
        subregion,timezones,startOfWeek } = props.country;
    return (
        <Col className='colstyle' >
            <Card className='cardStyles'  >
            <Card.Title className='clr' >{name.common}</Card.Title>
            <Card.Img height='300px' variant="top" src={flags.png} />
                <Card.Body>
                    <h5>Capital: {capital}</h5>
                    <h5>Population : {population} </h5>
                    <h5>Region : {region}</h5>
                    <h5>Subregion : {subregion}</h5>
                    <h5>Timezones : {timezones}</h5>
                    <h5>StartOfWeek : {startOfWeek}</h5>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Country;