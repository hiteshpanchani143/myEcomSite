import React, { useState,useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Spiner from './Spiner'



const Tv = () => {
   
const [getMobiledata,setMobileData] = useState([]);
const [isLoading,setIsLoading] = useState(false)

const getData = async()=>{
    const newData = await axios.get('https://63be7854f5cfc0949b5819ef.mockapi.io/APi1/?category=tv');
    setMobileData(newData.data)
    setIsLoading(true)
}



useEffect(() => {
 
    getData()
    setTimeout(() => {
      setIsLoading(false)
     }, 2000);
}, []);

  return (
    <>
    {isLoading && <Spiner/>}
    <section id ='home'> 
      <div className='container'>
        <div className='home_content'>
    
{
  getMobiledata.map((item)=>(
    <ProductCard key={item.id} {...item}/>
  ))
}
</div>
</div>
</section>
</>
  );
}

export default Tv;
