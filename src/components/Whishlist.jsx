import React from 'react';
import { useSelector,useDispatch  } from 'react-redux';
import {removeWishlistItem,closeWishlist} from '../store/slices/whishlistSlice'


const Whishlist = () => {

  const dispatch = useDispatch()
  const {wishlistItems,isWhishlistOpen} = useSelector((state)=>state.whishlist)

const handleCloseWhishlist = (close)=>{
  dispatch(closeWishlist(close))
}

const handleRemove =(itemId)=>{
  dispatch(removeWishlistItem(itemId))
}

  const wishlistQuantity = wishlistItems.length;
  return (
    <div>
        {
          isWhishlistOpen && (

            <div id="cart">
                 <div className="cart_content">
                 <div className="cart_head">
                          <h2>Whishlist <small>({wishlistQuantity})</small></h2>
                          <div 
                              title='Close'
                              className='close_btn'
                              onClick={()=>handleCloseWhishlist(false)}
                              >
                              <span> &times; </span>
                          </div>
                    </div>

                      <div className='cart_body'>
                            {
                              wishlistQuantity === 0 ? (
                                <h2>Whishlist is empty</h2>
                              ):
                              (
                                wishlistItems.map((item)=>{
                                  const {id,img,title,price} = item;
                          
                                  return(
                                    <div className='cart_items' key={id}>
                                      <figure className='cart_items_img'>
                                         <img src={img} alt='product-img'/>
                                      </figure>

                                      <div className='cart_items_info'>
                                            <h4>{title}</h4>
                                            <h3 className='price'> {price.toLocaleString()}</h3>
                                      </div>

                                  

                                       <div 
                                          title='Remove Item'
                                          className='cart_items_delete'
                                          onClick={()=> handleRemove(id)}
                                       > 
                                          <span> &times;</span>

                                       </div>
                                   </div>
                                  )
                                })
                              )
                            }
                     </div>
                </div>
            </div>
          )
          
        }
    </div>
  );
}

export default Whishlist;
