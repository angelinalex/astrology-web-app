import React from 'react';
import { json, useLocation } from 'react-router-dom';
import './PresentChart.css';
import aries from '../assets/icons8-aries-16.png';
import taurus from '../assets/icons8-taurus-16.png';
import gemini from '../assets/icons8-gemini-16.png';
import cancer from '../assets/icons8-cancer-16.png';
import leo from '../assets/icons8-leo-16.png';
import virgo from '../assets/icons8-virgo-16.png';
import libra from '../assets/icons8-libra-16.png';
import scorpio from '../assets/icons8-scorpio-16.png';
import sagittarius from '../assets/icons8-sagittarius-16.png';
import capricorn from '../assets/icons8-capricorn-16.png';
import aquarius from '../assets/icons8-aquarius-16.png';
import pisces from'../assets/icons8-pisces-16.png';
import neptune from '../assets/icons8-neptune-symbol-16.png';
import pluto from '../assets/icons8-pluto-16.png';

const PresentChart = () => {

    const location = useLocation();
    const data = location.state;
    const jsonObject = JSON.parse(data);
    console.log(jsonObject);
    const name = jsonObject.data.data.name;
    const city = jsonObject.data.data.city;
    const day = jsonObject.data.data.day;
    const month = jsonObject.data.data.month;
    const year = jsonObject.data.data.year;

    const allPlanets = jsonObject.data.data;

    const sun = getFullSignName(allPlanets.sun.sign);

    const moon = getFullSignName(allPlanets.moon.sign);
    const mercury = getFullSignName(allPlanets.mercury.sign);
    const venus = getFullSignName(allPlanets.venus.sign);
    const mars = getFullSignName(allPlanets.mars.sign);
    const jupiter = getFullSignName(allPlanets.jupiter.sign);
    const saturn = getFullSignName(allPlanets.saturn.sign);
    const uranus = getFullSignName(allPlanets.uranus.sign);
    const neptune = getFullSignName(allPlanets.neptune.sign);
    const pluto = getFullSignName(allPlanets.pluto.sign);
    
    const first = getFullSignName(allPlanets.first_house.sign);
    const second = getFullSignName(allPlanets.second_house.sign);
    const third = getFullSignName(allPlanets.third_house.sign);
    const fourth = getFullSignName(allPlanets.fourth_house.sign);
    const fifth = getFullSignName(allPlanets.fifth_house.sign);
    const sixth = getFullSignName(allPlanets.sixth_house.sign);
    const seventh = getFullSignName(allPlanets.seventh_house.sign);
    const eighth = getFullSignName(allPlanets.eighth_house.sign);
    const ninth = getFullSignName(allPlanets.ninth_house.sign);
    const tenth = getFullSignName(allPlanets.tenth_house.sign);
    const eleventh = getFullSignName(allPlanets.eleventh_house.sign);
    const twelfth = getFullSignName(allPlanets.twelfth_house.sign);

    const adjectives = {
      aries_a: "Energy, Impulsiveness, Courage, Competitiveness, and Adventure.",
      taurus_a: "Reliability, Patience, Determination, Practicality, and Sensualit.y",
      gemini_a: "Adaptability, Curiosity, Versatility, Sociability, and Communication.",
      cancer_a: "Nurturing, Emotionality, Compassion, Protectiveness, and Sensitivity.",
      leo_a: "Confidence, Charisma, Creativity, Pride, and Drama.",
      virgo_a: "Analytical thinking, Organization, Detail-orientedness, Practicality, and Modesy",
      libra_a: "Diplomacy, Charm, Fair-mindedness, Social Outlook, and Grace.",
      scorpio_a: "Intense Personality, Mystery, Determination, Passion, and Resilience.",
      sagittarius_a: "Optimism, Adventure, Independence, Philosophy, and Honesty.",
      capricorn_a: "Ambition, Discipline, Responsibility, Patience, and Pragmatism.",
      aquarius_a: "Innovation, Intellectualism, Independence, Humanitarianism, and Eccentricism.",
      pisces_a: "Compassion, Imaginativeness, Empathy, Dreaminess, and Sensitivity.",
    };
    
    
    // Example usage:
    const ariesAdjectives = adjectives.aries;
    console.log("Aries Adjectives:", ariesAdjectives);
    

    function getAdjective(sign){
      if (sign === 'Taurus') {
        return adjectives.taurus_a;
      } else if (sign === 'Aries') {
        return adjectives.aries_a;
      } else if (sign === 'Gemini') {
        return adjectives.gemini_a;
      } else if (sign === 'Cancer') {
        return adjectives.cancer_a;
      } else if (sign === 'Leo') {
        return adjectives.leo_a;
      } else if (sign === 'Virgo') {
        return adjectives.virgo_a;
      } else if (sign === 'Libra') {
        return adjectives.libra_a;
      } else if (sign === 'Scorpio') {
        return adjectives.leo_a;
      } else if (sign === 'Sagittarius') {
        return adjectives.sagittarius_a;
      } else if (sign === 'Capricorn') {
        return adjectives.capricorn_a;
      } else if (sign === 'Aquarius') {
        return adjectives.aquarius_a;
      } else if (sign === 'Pisces') {
        return adjectives.pisces_a; 
      } else if (sign === 'Neptune'){
        return adjectives.neptune_a;

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
        } else if (abbreviation === 'Aqu') {
          return 'Aquarius'; // Fixed the typo here as well (from 'Auquarius' to 'Aquarius')
        } else if (abbreviation === 'Pis') {
          return 'Pisces';
        }
      }
      

    function getEmoji(sign) {
        if (sign === 'Taurus') {
            return taurus;
          } else if (sign === 'Aries') {
            return aries;
          } else if (sign === 'Gemini') {
            return gemini;
          } else if (sign === 'Cancer') {
            return cancer;
          } else if (sign === 'Leo') {
            return leo;
          } else if (sign === 'Virgo') {
            return virgo;
          } else if (sign === 'Libra') {
            return libra;
          } else if (sign === 'Scorpio') {
            return scorpio;
          } else if (sign === 'Sagittarius') {
            return sagittarius;
          } else if (sign === 'Capricorn') {
            return capricorn;
          } else if (sign === 'Aquarius') {
            return aquarius;
          } else if (sign === 'Pisces') {
            return pisces; 
          } else if (sign === 'Neptune'){
            return neptune;

          }
          
    
    }


//
  return (


        <div className='container'> 

        <div className='info'> 



            <ul className='features'>
                <li> {name}</li>
                <li> Born in {city} </li>
                <li> On {month}/{day}/{year} </li>

            </ul>

          
            <p className='title1'>  <strong> Planets</strong> </p>
            <ul className='planets_list'> 
                <li> <img src = {getEmoji(sun)}/> Sun in {sun}     </li>
                <li> <img src = {getEmoji(moon)}/> Moon in {moon}     </li>
                <li> <img src = {getEmoji(mercury)}/> Mercury in {mercury}     </li>
                <li> <img src = {getEmoji(venus)}/> Venus in {venus}     </li>
                <li> <img src = {getEmoji(mars)}/> Mars in {mars}     </li>
                 <li> <img src = {getEmoji(jupiter)}/> Jupiter {jupiter}     </li>
                 <li> <img src = {getEmoji(saturn)}/> Saturn in {saturn}     </li>
                <li> <img src = {getEmoji(uranus)}/> Uranus in {uranus}     </li>

              <li> <img src = {getEmoji(neptune)}/> Neptune in {neptune}     </li>
                <li> <img src = {getEmoji(pluto)}/> Pluto in {pluto}     </li>
            </ul>

             <p className='title2'> <strong> Houses</strong> </p>
             <ul className='planets_list'> 
                <li> <img src = {getEmoji(first)}/> First House in {first}. </li> 

              
                <li> <img src = {getEmoji(second)}/> Second House is in {second}.  </li>
               

                <li> <img src = {getEmoji(third)}/> Third House is in {third}.     </li>
        
                <li> <img src = {getEmoji(fourth)}/> Fourth House is in  {fourth}.     </li>
            
             
                <li> <img src = {getEmoji(fifth)}/> Fifth House is in {fifth}.  </li>
              
                <li> <img src = {getEmoji(sixth)}/> Sixth Houseis in {sixth}.    </li>
               
                <li> <img src = {getEmoji(seventh)}/> Seventh House is in {seventh}.     </li>
             
                <li> <img src = {getEmoji(eighth)}/> Eighth House is in {eighth}.     </li>
               
                <li> <img src = {getEmoji(ninth)}/> Nineth House is in {ninth}.     </li>
             
                <li> <img src = {getEmoji(tenth)}/> Tenth Houseis in {tenth}.     </li>
              
                <li> <img src = {getEmoji(eleventh)}/> Eleventh Houseis in {eleventh}.     </li>
           
                <li> <img src = {getEmoji(twelfth)}/> Twelfth House is in {twelfth}.     </li>  
          
              </ul>

                <p className='title3'> <strong>  Insights </strong> </p>

                <ul className='features'> 
                <li> <strong><img src={getEmoji(first)}/> First House, the House of Self is in {first}.</strong> </li>

                <br></br>
                <li>   Affecting physical appearance, identity and characteristics. Resourcefulness. Outlook and impressions.  </li>
                <br></br>
                
                <li> Influenced by {getAdjective(first)}</li>
                <br></br>

                <li> <strong> <img src = {getEmoji(second)}/> Second House, The House of Value, is in {second}. </strong>   </li>
                <br></br>
                <li>Material and immaterial things of certain value. Money. Possessions and acquisitions. Cultivation. Substance. Self-worth. </li>
                <br></br>
                <li> Influenced by {getAdjective(second)}</li>
                <br></br>
  


                <li> <strong> <img src = {getEmoji(third)}/> Third House, The House of Sharing, is in {third}.   </strong>    </li>
                <br></br>
                <li> Communication. Distribution/generosity. Intelligence/development. Siblings. Locomotion and transportation.  </li>
                <br></br>
                <li> Influenced by {getAdjective(third)}</li>
                <br></br>

                <li> <strong> <img src = {getEmoji(fourth)}/> Fourth House, The House of Home and Family is in  {fourth}.   </strong>    </li>
                <br></br>
                <li>Ancestry, heritage, roots. Foundation and environment. Mother or caretaker. Housing and the household. Neighborhood matters. Comfort, security. Tidiness. Pets</li>
                <br></br>
                <li>  Influenced by {getAdjective(fourth)}   </li>

                <br></br>
                <li> <strong> <img src = {getEmoji(fifth)}/> Fifth House, The House of Pleasure, is in {fifth}. </strong>  </li>
                <br></br>
                <li> Recreational and leisure activities. Things which make for enjoyment and entertainment. Games/gambling/risk. Romance and limerence. Children/fertility. Creative self-expression.</li>
                <br></br>
                <li> Influenced by {getAdjective(fifth)}</li>
                <br></br>
                <li>  <strong><img src = {getEmoji(sixth)}/> Sixth House, The House of Health is in {sixth}. </strong>    </li>
                <br></br>
                <li>Routine tasks and duties. Skills or training acquired. Employment (job). Service performed for others. Strength, vitality. Wellness and healthcare. Courage.</li>
                <br></br>
                <li> Influenced by {getAdjective(sixth)} </li>
                <br></br>

                <li><strong><img src = {getEmoji(seventh)}/> Seventh House, House of Balance, is in {seventh}.  </strong>    </li>
                <br></br>
                <li>Partnerships. Marriage and business matters. Diplomacy. Agreements, contracts and all things official. </li>
                <br></br>
                <li> Influenced by {getAdjective(seventh)}</li>
                <br></br>

                <li> <strong><img src = {getEmoji(eighth)}/> Eighth House, House of Transformation, is in {eighth}.  </strong>    </li>
                <br></br>
                <li>Cycles of deaths and rebirth. Sexual relationships and commitments of all kinds. Joint funds, finances. Other person's resource. Karma and debt (judgment). Regeneration. Self-transformation. </li>
                <br></br>
                <li> <strong> </strong>Influenced by {getAdjective(eighth)}</li>
                <br></br>

                <li> <strong><img src = {getEmoji(ninth)}/> Nineth House, The House of Purpose, is in {ninth}.  </strong>    </li>
                <br></br>
                <li>Travel and foreign affairs. Culture. Expansion. Law and ethics. Education/learning/knowledge. Philosophical interests, belief systems. Experience through exploration. </li>
                <br></br>
                <li> Influenced by {getAdjective(ninth)}</li>
                <br></br>

                <li><strong> <img src = {getEmoji(tenth)}/> Tenth House, The House of Enterprise is in {tenth}.  </strong>    </li>
                <br></br>
                <li>Ambitions. Motivations. Career, achievements. Society and government. Father or authority. Notoriety. Advantage.</li>
                <br></br>
                <li> Influenced by {getAdjective(tenth)}</li>
                <br></br>
                <li><strong> <img src = {getEmoji(eleventh)}/> Eleventh House, The House of Blessings, is in {eleventh}.  </strong>    </li>
                <br></br>
                <li>Benefits from effort. Friends and acquaintances of like-minded attitudes. Belonging. Groups, communities, and associations. Charity. Connectedness/networking. Love. </li>
                <br></br>
                <li> Influenced by {getAdjective(eleventh)} </li>
                <br></br>
                <li><strong> <img src = {getEmoji(twelfth)}/> Twelfth House, The House of Sacrifice, is in {twelfth}.  </strong>    </li>  
                <br></br>
                <li>  Extremes/abundance, but also addictions. Luck, miracles. Releasing/relinquishing, healing/cleansing, forgiveness, and peacefulness.  </li>
                <br></br>
                <li> Influenced by {getAdjective(twelfth)} </li>
                <br></br>
                </ul>

        {/* <p className='title3'> Understanding Your Chart      </p>
        <p className='descrips'> 
        In astrology, your sun sign represents your core personality, ego, and the essential traits that define who you are at your core.
        It is often the most well-known and widely recognized aspect of a person's astrological profile. Your sun is in {sun}.
        </p>
        */}

</div>
      
        </div> 
      

  )
}

export default PresentChart
