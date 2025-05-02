import React from 'react'
 import Card from "../components/Card";
 import SpecialOff from '../components/SpecialOff'
 import Flash from '../components/Flash'
 import Carousel from '../components/CarouselWrapper'
 import Main from '../components/Main'
 function Home() {
 
 
   return (
     <div>
       <Carousel/>
       <Card />
       <Main/>
       
       <Flash/>
     

       <SpecialOff/>

     </div>
   );
 }
 

 export default Home;