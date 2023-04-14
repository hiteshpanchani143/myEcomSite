import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleCart} from '../store/slices/cartslice'
import {openWishlist} from '../store/slices/whishlistSlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../authintication/firebaseAuth';



const Header = () => {
const navigate = useNavigate()
  const [displayName, setdisplayName] = useState('');
  const {cartItems} =useSelector((state)=> state.cart);
  const {wishlistItems}= useSelector((state)=> state.whishlist)

  const [uName,setuname] = useState(false)
  const [toggleAuth,settoggleauth] = useState(true) 

  const dispatch =useDispatch();


  const handleOpenCart =(open)=>{

    dispatch(toggleCart(open));
  }

  const handleOpenWishlist =(open)=>{
    
      dispatch(openWishlist(open))
  }

 

  const cardQuantity = cartItems.length;
  const wishlistQuantity = wishlistItems.length;

// logout

const logoutUser=()=>{
  signOut(auth).then(() => {
    settoggleauth(true)
    navigate('/login')
    // Sign-out successful.
  }).catch((error) => {
    console.log(error.message);
  });
}

  // monitor currently sign in user
useEffect(() => {

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      const uid = user.uid;
      if(uid === null || ''){
        settoggleauth(true)
      }else{
        settoggleauth(false)
      }
      // console.log(user.displayName);
      setdisplayName(user.displayName)
      if(user.displayName){
        setuname(false)
        console.log(uName);
      }else{
        setuname(true)
        console.log(uName);
      }
      // ...
    } else {
      setdisplayName('')
    }
  })
}, []);

  return (
    <>
   
      <header id='header' className='head'>
          <div className='container'>
              <div className='navbar'>
                  
            
            
 <Link to='/'><h4>Logicrays</h4></Link>

 <Link to ="/mobile"> Mobile </Link>
 <Link to ="/tv"> Tv </Link>
 <Link to ="/laptop"> Laptop </Link>

<div>{displayName}</div>


                 <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                     <div className='whishlistIcon' style={{marginRight:'20px',cursor:'pointer'}} >

                     <FavoriteIcon sx={{fontSize:'2rem',}} onClick={()=> handleOpenWishlist(true)}/> 
                     <span className='whishlistCounter'>{wishlistQuantity}</span>
                     </div>
               
 <div className='nav_menu'>

<div
title='Cart'
className='cart_icon'
onClick={()=> handleOpenCart(true)}
>

<img className='cart-svg' src='./images/bag-icon.svg'
  alt='bag-icon'
/>
<span className='badge'>{cardQuantity}</span>

</div>
</div>
{toggleAuth ? <div className='login'><Link to='/login'>login</Link> </div>  :<div className='login' onClick={logoutUser}>logout </div>}
                 </div>
              </div>
          </div>
      </header>
    
    </>
  );
}

export default Header;
