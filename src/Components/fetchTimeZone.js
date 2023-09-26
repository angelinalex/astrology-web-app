
export const fetchTimeZone = async (lat,lon) => {
    const REACT_APP_MAP_API_KEY = '11403196695742ecbafa588e293568ee';
  
    try {
        // console.log('test spot 1');
        const response = await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=11403196695742ecbafa588e293568ee`);
        // console.log('test spot 2');
        const data = await response.json();      
        // console.log('test spot 3');
        const results = data.results;
        // console.log('test spot 4');
    
  
        return results;
        
          
    } catch (err) {
      return { error: "Unable to retrieve places" };
    }
  };
  