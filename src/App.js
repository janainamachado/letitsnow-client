import React, { useState, useEffect } from 'react';
import './App.css';
import CityList from './components/CityList'
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API;

function App(){ 
  const [mapBox, setMapBox] = useState();
  const [cityList, setCityList] = useState([]);
  

  useEffect(() => {
    
    setMapBox(new mapboxgl.Map({
      container: 'mapBox',
      style: 'mapbox://styles/mapbox/light-v10',
      center: [24.00000000, 55.16670000],
      zoom: 10,
      scrollZoom: true
    })); 
  }, []);

  useEffect(() => {
    if(mapBox) {
    }
  }, [mapBox])


  cityList.map((city) =>
  new mapboxgl.Marker()
    .setLngLat([city.longitude, city.latitude])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
  .setHTML(
    `<h3>${city.city_name}</h3>
    <p>${city.current_temp_celsius}<p>`
  )
    )
    .addTo(mapBox)
  )

  return (
    
    <div className='container'>
      <div className='sidebar'>
        <div className='heading'>
          <h1>Cities</h1>
        </div>
        <CityList 
        cityList={cityList}
        setCityList={setCityList}
        mapBox={mapBox}/>
      </div>
      <div className='mapContainer'>
        <div id='mapBox' className='map'></div>
      </div>
    </div>
  
  )
}

export default App;

