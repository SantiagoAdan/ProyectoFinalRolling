import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf, faWind, faCloudSun} from  '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Weather = ({weather}) => {
    return (
        <div className='bg-celeste-crud text-white container-fluid d-flex justify-content-evenly'>
            <div><FontAwesomeIcon icon={faMapMarkerAlt}/> : {weather.city}</div>              
            <div><FontAwesomeIcon icon={faThermometerHalf}/> : {Math.round(weather.temp)}°</div>
            <div><FontAwesomeIcon icon={faCloudSun}/> : {weather.sky} </div>
            <div><FontAwesomeIcon icon={faWind}/> : {Math.round(weather.wind)} km/h</div>
            
            
        </div>
    );
};

export default Weather;