import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem, removeItem, toggleCart } from '../store/slices/cartslice';



const Cart = () => {
    const { isCartOpen , cartItems} = useSelector((state)=>state.cart);

    const dispatch = useDispatch();

    const handleCloseCart = (close)=>{
      dispatch(toggleCart(close))
    }

    const handleRemove =(itmeId)=>{
        dispatch(removeItem(itmeId))
    }
  
    const handleIncrement = (itmeId)=>{
       dispatch(incrementItem(itmeId))
    }

    const handleDecrement = (itmeId)=>{
        dispatch(decrementItem(itmeId))
    }

    const cardQuantity = cartItems.length;

    const cardTotle = cartItems.map(item => item.price * item.quantity).reduce((preVal,currVal)=> preVal + currVal , 0)

  return (
    <>
      {

        isCartOpen && (
          <div id="cart">
              <div className="cart_content">
                    <div className="cart_head">
                          <h2>Cart <small>({cardQuantity})</small></h2>
                          <div 
                              title='Close'
                              className='close_btn'
                              onClick={()=>handleCloseCart(false)}>
                              <span> &times; </span>
                          </div>
                    </div>

                    <div className='cart_body'>
                          {
                            cardQuantity === 0 ? (
                               <h2>Cart is empty</h2>
                            ) : (
                              cartItems.map(item =>{
                                 const {id,img,title,price,quantity} = item;
                                 const itemTotal = price * quantity;

                                 return(
                                  <div className='cart_items' key={id}>
                                      <figure className='cart_items_img'>
                                         <img src={img} alt='product-img'/>
                                      </figure>

                                      <div className='cart_items_info'>
                                            <h4>{title}</h4>
                                            <h3 className='price'> {itemTotal.toLocaleString()}</h3>
                                      </div>

                                      <div className='cart_items_quantity'>
                                            <span onClick={()=> handleDecrement(id)}> &#8722;</span>
                                            <b>{quantity}</b>
                                            <span onClick={()=> handleIncrement(id)}>&#43;</span>
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

                    <div className='cart_foot'>
                          <h3>
                            <small>Total:</small>
                            <b>{cardTotle.toLocaleString()}</b>
                          </h3>

                          <button
                              type='button'
                              className='checkout_btn'
                              disabled={cardQuantity === 0}>

                              Checkout
                          </button>
                    </div>
              </div>
          </div>
        )

      }
    </>
  );
}

export default Cart;
