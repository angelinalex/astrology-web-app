import React from 'react';
import './Signs.css';
import { useState } from 'react';
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
import SignDesc from './SignDesc';



const Signs = () => {


   
  const [Sign, setSelectedImage] = useState('aries');

  const handleImageClick = (sign) => {
    setSelectedImage(sign);
  };
   return (
     <div className='text-container'>
     <div className='icons-container'>  
     <div className='icon-group' onClick={() => handleImageClick('Aries')}>    
     <img src={aries} alt='aries' className='icon'/>
     <label className='sign'> Aries </label>
     <label className='date'> March 21 - April 19 </label>
     </div>
     <div className='icon-group'onClick={() => handleImageClick('Taurus')}>
     <img src={taurus} alt='taurus' className='icon'/>
     <label className='sign'> Taurus </label>
     <label className='date'> April 20 - May 20 </label>
     </div>
     <div className='icon-group' onClick={() => handleImageClick('Gemini')}>    
     <img src={gemini} alt='gemini' className='icon'/>
     <label className='sign'> Gemini </label>
     <label className='date'> May 21 - June 20 </label>
     </div>
     <div className='icon-group' onClick={() => handleImageClick('Cancer')}>      
     <img src={cancer} alt='cancer' className='icon'/>
     <label className='sign'> Cancer </label>
     <label className='date'> June 21 - July 22 </label>
     </div>
     <div className='icon-group'onClick={() => handleImageClick('Leo')}>      
     <img src={leo} alt='leo' className='icon'/>
     <label className='sign'> Leo </label>
     <label className='date'> July 23 - Aug 22 </label>
        </div>
        <div className='icon-group'onClick={() => handleImageClick('Virgo')}>    
        <img src={virgo} alt='virgo' className='icon'/>
        <label className='sign'>  Virgo </label>
        <label className='date'> Aug 23 - Sep 22 </label>
         </div>
        <div className='icon-group' onClick={() => handleImageClick('Libra')}>     
        <img src={libra} alt='libra' className='icon'/>
        <label className='sign'>  Libra </label>
        <label className='date'> Sep 23 - Oct 22 </label>
        </div>
        <div className='icon-group' onClick={() => handleImageClick('Scorpio')}>    
        <img src={scorpio} alt='scorpio' className='icon'/>
        <label className='sign'>  Scorpio </label>
        <label className='date'> Oct 23 - Nov 21 </label>
        </div>
        <div className='icon-group'onClick={() => handleImageClick('Sagittarius')}>      
       <img src={sagittarius} alt='sagittarius' className='icon'/>
       <label className='sign'>  Sagittarius </label>
       <label className='date'> Nov 22 - Dec 21 </label>
        </div>
        <div className='icon-group'onClick={() => handleImageClick('Capricorn')}>      
     <img src={capricorn} alt='capricorn' className='icon'/>
     <label className='sign'>  Capricorn </label>
     <label className='date'> Dec 22- Jan 19 </label>
        </div>
        <div className='icon-group'onClick={() => handleImageClick('Aquarius')}>      
     <img src={aquarius} alt='aquarius' className='icon'/>
     <label className='sign'>  Aquarius </label>
     <label className='date'> Jan 20 - Feb 18 </label>
        </div>
 
 <div className='icon-group'onClick={() => handleImageClick('Pisces')}>    
 <img src={pisces} alt='pisces' className='icon'/>
 <label className='sign'>  Pisces </label>
 <label className='date'> Feb 19 - Mar 20 </label>


   
 </div>
     
   
     </div>

     <div className='sign-desc-container'>  <SignDesc myProp = {Sign}/> </div>


     </div>
   )
 }
 
 export default Signs;