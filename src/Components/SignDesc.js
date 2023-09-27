import React from 'react';
import { useState } from'react';
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
import ariestext from '../data/Aries .rtf';
import taurustext from '../data/Taurus.rtf';
import geminitext from '../data/Gemini.rtf';
import cancertext from '../data/Cancer.rtf';
import leotext from '../data/Leo.rtf';
import libratext from '../data/Libra.rtf';
import sagittariustext from '../data/Sagittarrius .rtf';
import capricorntext from '../data/Capricorn.rtf';
import aquariustext from '../data/Aquarius.txt';
import piscestext from '../data/Pisces.txt';
import virgotext from '../data/Virgo.rtf';
import scorpiotext from '../data/Scorpio.rtf';
import './SignDesc.css';


const SignDesc = (props) => {
 

 
  let image = aries;
  let sign = props.myProp;
  let color = 'Red';
  let element = 'Earth';
  let ruler = 'Mars';
  let strengths = 'Leadership, Confidence, Courage,';
  let weaknesses = 'Impulsive, Impatient, Limited follow-through';
  let personality = strengths + weaknesses; 

  const [description, setDescription] = useState('');
  const fetchDescription = async (file) => {
    try {
      const response = await fetch(file);
      const text = await response.text();
      const paragraphs = text.split("\\").join('\n');
      setDescription(paragraphs);
    } catch (error) {
      console.error('Error reading file: sad', error);
    }

  };

  


  if (sign === "Aries") {
    image = aries;
    color = 'Red';
    ruler = 'Mars';
    element = 'Fire';
    strengths = 'Leadership, Confidence, Courageous,';
    weaknesses = 'Impulsive, Impatient, Limited follow-through';
    personality = strengths + weaknesses;
    fetchDescription(ariestext);
  } else if (sign === "Gemini") {
    image = gemini;
    color = 'Yellow';
    ruler = 'Mercury';
    element = 'Air';
    weaknesses = 'Curious, Communicative, Verstile';
    strengths = 'High-Strung, Restless, Inconsistant,';
    personality = strengths + weaknesses;
    fetchDescription(geminitext);
  }
  else if(sign ==="Taurus"){
    image = taurus;
    color = "Green";
    ruler = "Venus";
    element = "Earth";
    strengths = "Patient, Realiable, Devoted";
    weaknesses = "Stubborn, Possesive";
    personality = strengths + weaknesses;
    fetchDescription(taurustext);
  }
  else if (sign === "Cancer") {
    image = cancer;
    color = 'White';
    ruler = 'Moon';
    element = 'Water';
    weaknesses = 'Nurturing, Persistant, Intuitive';
    strengths = 'Moody, Sensitive,';
    personality = strengths + weaknesses;
    fetchDescription(cancertext);
  }
  else if (sign === "Leo") {
    image = leo;
    element = 'Fire';
    ruler = 'Sun';
    color = 'Red, Orange, Scalrlet';
    strengths = 'Generous, Warmhearted, Creative,';
    weaknesses =' Bossy, Stubborn, Self-Centered';
    personality = strengths + weaknesses;
    fetchDescription(leotext);
  }
  else if (sign === "Virgo") {
    image = virgo;
    element = 'Fire';
    color = 'Gold, Orange';
    ruler = 'Sun';
    strengths = 'Organized, Efficient, Practical, ';
    weaknesses =' Reversed, Anxious, Critical';
    personality = strengths + weaknesses;
    fetchDescription(virgotext);
  }
  else if (sign === "Libra") {
    image = libra;
    element = 'Air';
    color = 'Blue, Pink';
    ruler = 'Venus';
    strengths = 'Fair, Cooperative,';
    weaknesses ='Indecisive, Idealistic';
    personality = strengths + weaknesses;
    fetchDescription(libratext);
  }
  else if (sign === "Scorpio") {
    image = scorpio;
    element = 'Water';
    color = 'Red';
    ruler ='Pluto, Mars';
    strengths = 'Determined, Willpowered,';
    weaknesses ='Stubborn, Possessive, Vengeful';
    personality = strengths + weaknesses;
    fetchDescription(scorpiotext);
  }
  else if (sign === "Sagittarius") {
    image = sagittarius;
    element = 'Fire';
    color = 'Blue';
    ruler = 'Jupiter';
    strengths = 'Enthusiastic, Honest, ';
    weaknesses ='Outspoken, Irresponsible';
    personality = strengths + weaknesses;
    fetchDescription(sagittariustext);
  }
  else if (sign === "Capricorn") {
    image = capricorn;
    element = 'Earth';
    color = 'Brown';
    ruler = 'Saturn';
    strengths = 'Ambitious, Practical, Responsible,';
    weaknesses ='Rigid, Stingy';
    personality = strengths + weaknesses;
    fetchDescription(capricorntext);
  }
  else if (sign === "Aquarius") {
    image = aquarius;
    element = 'Air';
    color = 'Blue';
    ruler = 'Uranus';
    strengths = 'Loyal, Inventive, Independent,';
    weaknesses ='Detached, High-strung, rebellious';
    personality = strengths + weaknesses;
    fetchDescription(aquariustext);
  }
  else if (sign === "Pisces") {
    image = pisces;
    element = 'Water';
    color = 'Green';
    ruler = 'Jupiter';
    strengths = 'Compassionate, Creative, Intuitive,';
    weaknesses ='Escapist, Impressionable, Unrealistic';
    personality = strengths + weaknesses;
    fetchDescription(piscestext);

  }
  else {
    image = aries;
    color = 'Red';
    ruler = 'Mars';
    element = 'Fire';
    strengths = 'Leadership, Confidence, Courageous,';
    weaknesses = 'Impulsive, Impatient, Limited follow-through';
    fetchDescription(ariestext);
  }

  


  
    return (
      <div className='sign-desc-container'>
        <div className='sign-icon'>
        <h1 className='sign-title'>The Astrological Sign:&nbsp;{sign}</h1>

          <div className='text-and-image'>
      
      

          <img
              src={image}
              alt='sign-icon'
              className='sign-icon-img'
            />


 

    
        

          </div>
          
          <div className='description'>
          <div className='text'>
          <label className='word'>Personality:</label>
          
         <p>{personality}</p>

        </div>

        <div className='text'>
        <label className='word'>Element:</label>
        <p>{element}</p>
        </div>

            
          
          <div className='text'>
        <label className='word'>Color:</label>
         <p>{color}</p>
        </div>

        <div className='text'>
        <label className='word'>Ruler:</label>
        <p>{ruler}</p>
        </div>
            {description}
    

     
         </div>
        </div>
      </div>
    );
  };
  
  export default SignDesc;