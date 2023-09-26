import React from 'react';
import './CalculatorBox.css';
import { useNavigate } from 'react-router-dom';
import { fetchPlace } from './fetchPlace';
import { useState } from 'react';


const CalculatorBox = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    birthTime: '',
    city: '',
  });
  const [city, setCity] = useState('');
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");


  const handleCityChange = async (e) => {
    const newCity = e.target.value;
    setCity(newCity);
    if (!newCity) return;
    const res = await fetchPlace(newCity);
    if (res.features) {
      const newAutocompleteCities = res.features.map((place) => place.place_name);
      setAutocompleteCities(newAutocompleteCities);
    } else {
      setAutocompleteCities([]);
    }
    if (res.error) {
      setAutocompleteErr(res.error);
    } else {
      setAutocompleteErr("");
    }
    // Update the city field in the formData state
    setFormData(prevFormData => ({
      ...prevFormData,
      city: newCity,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
   //check if the city is valid
   const res = fetchPlace(city);
   if(!res){
    setAutocompleteErr('Please select a valid city.');
    return;
  }
  else{
    // navigate('/calculation', { state: formData });
      navigate('/calculation', { state: formData });
  }
  // At this point, all validations are successful
  setAutocompleteErr('');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };




  return (
    <div className='calculator-box'>
      <h2>Astrology Chart Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Birthplace:
          <div className="placesAutocomplete">
        <div className="placesAutocomplete__inputWrap">
          <label htmlFor="city" className="label">

            {autocompleteErr && (
              <span className="inputError">{autocompleteErr}</span>
            )}
          </label>
          <input
            list="places"
            type="text"
            id="city"
            name="city"
            onChange={handleCityChange}
            value={city}
            required
            pattern={autocompleteCities.join("|")}
            autoComplete="off"
          />
          <datalist id="places">
            {autocompleteCities.map((city, i) => (
              <option key={i}>{city}</option>
            ))}
          </datalist>
          <span className="placesAutocomplete__hint">
    
          </span>
       
        </div>
      </div>
        </label>
        <br />
        <label>
          Birthday:
          <input
            type='date'
            name='birthday'
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Birth Time:
          <input
            type='time'
            name='birthTime'
            value={formData.birthTime}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};



export default CalculatorBox;
