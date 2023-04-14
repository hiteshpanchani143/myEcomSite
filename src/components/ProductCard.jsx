import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/slices/cartslice';

import {getWhishlistData} from '../store/slices/whishlistSlice'

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';




const ProductCard = (props) => {


 const {img,rating,title,price,id} = props;

 const [isAdded,setIsAdded] = useState(false);
 const [ratingProduct,setRatingProduct] = useState(0)
 const [heart,setHeart] = useState(false)

 const dispatch = useDispatch()

 const {removeHeart,wishlistItems} = useSelector((state)=> state.whishlist)
// style object

const heartStyle ={
   background:'red',
}


 const handleAddToCart = ()=>{



   const item = {...props}
   dispatch(addItem(item))
   
   setIsAdded(true)
   
   setTimeout(() => {
      setIsAdded(false)
   }, 2000);
} 

const getWhislistProduct = (id) =>{
   
   const item = {...props,id}

   
   dispatch(getWhishlistData(item))
   setHeart(heart !== true)
   
 }
  return (
   <div className='product_card'>
      
   <figure>
       <img src={img} alt='item-img'/>
    </figure>


    {
      heart ? <div className='whishlist_icon' > <FavoriteIcon sx={{fontSize:'35px'}} onClick={()=>getWhislistProduct(id)}/></div>  : 
      <div className='whishlist_icon' > <FavoriteBorderOutlinedIcon  sx={{fontSize:'35px',background:{heartStyle}}} onClick={()=>getWhislistProduct(id)}/></div>
    }
    
    

   


    <strong className='rating'>{rating}
    <Rating precision={0.5}  onChange={(e)=>setRatingProduct(e.target.value)}/>
    </strong>
    <div> You have {ratingProduct} star this product</div>

    <h4 className='title'>{title}</h4>
    <h3 className='price'>

    ₹{price}</h3>
    <button
    type='button'
    className={`btn`}
    onClick={handleAddToCart}
    >
    {isAdded ? 'Added': 'Add to cart'}
    </button>
 </div>
  )
}

export default ProductCard;
