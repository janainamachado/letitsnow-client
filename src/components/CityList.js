import React, { useEffect } from 'react';
import '../App.css';


function CityList(props) {

  useEffect(() => {
    getCityList()
  }, [])

  const getCityList = () => {
    fetch(`/cities`)
    .then(response => response.json())
    .then(cityList => {
        props.setCityList(cityList)
    })
    .catch(error => 
      console.log(error))
  }


  const handleFlyTo = (city) => {
    let coord = [city.longitude, city.latitude]
    props.mapBox.flyTo({
      center: coord
    });
  }

  return(
    <div> 
      
      <ul id='listings' className='citylist'>
        
      {props.cityList.map(city => 
        <>
          <li className='city-style' onClick={() => handleFlyTo(city)} >{city.city_name}</li>
          <li className='listings-item'>{city.weather_type} {city.snow_mm}</li>
            <li className='listings-item'>Current weather: {city.current_temp_celsius}°C</li>
            <li className='listings-item'>Temp. Max: {city.max_temp_celsius}°C</li>
            <li className='listings-item'>Temp. Min: {city.min_temp_celsius}°C</li>
        </>  
            )} 
            
      </ul> 
      
    </div>
  )
}

export default CityList;