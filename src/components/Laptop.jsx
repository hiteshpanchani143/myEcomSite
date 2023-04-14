import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartslice';
import ProductCard from './ProductCard';
import Spiner from './Spiner'



const Laptop = () => {

   const dispatch = useDispatch()
   const [added,setAdded] = useState(false)
const [getMobiledata,setMobileData] = useState([]);
const [isLoading,setIsLoading] = useState(false)

const getData = async()=>{
    const newData = await axios.get('https://63be7854f5cfc0949b5819ef.mockapi.io/APi1/?category=laptop');
    setMobileData(newData.data)
    setIsLoading(true)
}

const handleAddToCart = (item)=>{
  dispatch(addItem(item))
  setAdded(true);
  setTimeout(() => {
    setAdded(false)
  }, 1000);
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

export default Laptop;
