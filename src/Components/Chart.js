import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCoordinates } from './fetchCoordinates'; // Assuming you have this function defined
import { fetchTimeZone } from './fetchTimeZone';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchPlace } from './fetchPlace';
import './Chart.css';
import aries from '../assets/2.png';
import taurus from '../assets/3.png';
import gemini from '../assets/4.png';
import cancer from '../assets/5.png';
import leo from '../assets/6.png';
import virgo from '../assets/7.png';
import libra from '../assets/8.png';
import scorpio from '../assets/9.png';
import sagittarius from '../assets/10.png';
import capricorn from '../assets/11.png';
import aquarius from '../assets/12.png';
import pisces from '../assets/13.png';



const Chart = () => {
  const location = useLocation();
  const data = location.state;
  const key = 'fwb6xHhCq15GCCpZaI5uN94YVoCPk881aKr19PZO';
  const [year, month, day]  = data.birthday.split('-');
  const [hour, minute] = data.birthTime.split(':');
  const name = data.name;
  const city = data.city.split(',')[0];
  var timezone = null;
  var chart = [];
  var latitude = null;
  var longitude = null;
  const API_KEY = 'fwb6xHhCq15GCCpZaI5uN94YVoCPk881aKr19PZO ';
  

  const navigate = useNavigate();
 

// Fetch Coordinates runs first
// Fetch Coordinates runs first

useEffect(() => {
  async function fetchCoordinate(city) {
    try {
      const res = await fetchCoordinates(city);
      if (!res) {
        console.log(("FetchCoordinates failed"));
        return;
      }
      let center = res.features[0].center;
      longitude = center[0];
      latitude = center[1];
      console.log('longitude/latitude: ' + latitude + ' ' + longitude);
   
      return center; // Return the center coordinates
    } catch (error) {
      // Handle error if needed
      console.error('Error fetching coordinates:', error);
      throw error; // Re-throw the error to be caught in the promise chain
    }
  }
  
  async function fetchTZ(center) {
    console.log('center check: ' + center);
    try {
      if (center) {
        const res = await fetchTimeZone(center[1], center[0]);
        if (!res) {
          console.log(("FetchTZ failed"));
          return;
        } else {
          const zone = res[0].timezone.name;
          console.log('zone' +  zone);
          timezone = zone;
        }
      }
    } catch (error) {
      // Handle error if needed
      console.error('Error fetching TZ:', error);
    }
  }

  function getFullSignName(abbreviation) {
    if (abbreviation === 'Ari') {
      return "Aries";
    } else if (abbreviation === 'Tau') {
      return 'Taurus';
    } else if (abbreviation === 'Gem') {
      return 'Gemini';
    } else if (abbreviation === 'Can') {
      return 'Cancer';
    } else if (abbreviation === 'Leo') {
      return 'Leo';
    } else if (abbreviation === 'Vir') {
      return 'Virgo';
    } else if (abbreviation === 'Lib') {
      return 'Libra';
    } else if (abbreviation === 'Sco') {
      return 'Scorpio';
    } else if (abbreviation === 'Sag') {
      return 'Sagittarius';
    } else if (abbreviation === 'Cap') {
      return 'Capricorn';
    } else if (abbreviation === 'Aug') {
      return 'Aquarius'; // Fixed the typo here as well (from 'Auquarius' to 'Aquarius')
    } else if (abbreviation === 'Pis') {
      return 'Pisces';
    }
  }
  


  const fetchData = async () => {
    const options = {
      method: 'POST',
      url: 'https://astrologer.p.rapidapi.com/api/v3/birth-chart',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a21b096736msh14ea0bd4386759fp11f46cjsn735c8552bfc3',
        'X-RapidAPI-Host': 'astrologer.p.rapidapi.com'
      },
      data: {
        name: name,
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        longitude: longitude,
        latitude: latitude,
        city: city,
        timezone: timezone,
        language: 'IT'
      }
    };
    try {
      console.log('at data fetch: lat/long' + latitude + ' ' + longitude + ' timezone: ' + timezone);
      const response = await axios.request(options);
      chart = response;
      console.log(chart);
      // sun = chart.data.data.sun.sign; 
      const signs = chart.data.data;
      console.log('check');
      console.log(signs.eighth_house.sign);
      console.log('type')
      console.log(typeof chart)
      const jsonResponse = JSON.stringify(response);


      navigate('/chart', { state: jsonResponse}); 

      
      console.log("ran end");
 


    } catch (error) {
      console.error(error);
    }
  }



  if (data.city) {
    fetchCoordinate(data.city)
      .then(center => {
        if (center) {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(center);
            }, 3000); // Add a 1-second (1000 milliseconds) delay
          });
        }
      })
      .then(center => {
        // After the pause, this code will run
        if (center) {
          fetchTZ(center);
        }
        console.log('fetching timezone')
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 8000); // Add a 1-second (1000 milliseconds) delay
        }).then(() => {
          fetchData(); // Call fetchData after the delay
          console.log('fetched data')
        });
      })
      .then(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 3000); // Add a 1-second (1000 milliseconds) delay
        }).then( ()  => {
          // setData();

        })
    
      });
  }
}, [data.city]); 






  return (
    <div>

<div className='loading-container'>              

<div className="loading-spinner"></div>
</div>


    </div>
  );
};

export default Chart;