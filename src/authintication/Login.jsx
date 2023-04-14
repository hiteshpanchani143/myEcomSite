import { Button, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from './firebaseAuth';
import Spiner from '../components/Spiner';
const Login = () => {

    const navigate = useNavigate()
    const [value,setvalue] = useState({
        email:'',
        password:''
    });

    const [errormsg,seterrormsg] = useState('');
    const [button,setbutton] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

const signinhandler = (e)=>{
    e.preventDefault()
    if(!value.email || !value.password){
        seterrormsg('fill the all blanks');
        return;
    }

    seterrormsg('');
    setbutton(true)
    setIsLoading(true)

    signInWithEmailAndPassword(auth, value.email, value.password)
    .then(async(res) => {
      // Signed in 
setbutton(false);
setIsLoading(false)
navigate('/')
    })
    .catch((error) => {
      setIsLoading(false)
      setbutton(false)
      seterrormsg(error.message)
    });

}

// sign in with google

const provider = new GoogleAuthProvider();
const sighInWithGoogle = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {

    const user = result.user;
    navigate('/')
  }).catch((error) => {
    console.log(error.message);
  });
}

  return (
    <div className='container'>
    {isLoading && <Spiner/>}
    <form onSubmit={signinhandler}>

    <Typography variant='h3' sx={{textAlign:'center'}}>Login</Typography>

<TextField
  id="email-input"
  label="Email"
 name='email'
  onChange={(e)=>setvalue((prev)=>({...prev,email:e.target.value}))}
  margin="normal"
  required
  fullWidth
/>
<TextField
  id="password-input"
  label="Password"
  type="password"
  name='password'
  onChange={(e)=>setvalue((prev)=>({...prev,password:e.target.value}))}
  margin="normal"
  required
  fullWidth
/>

<p>{errormsg}</p>
<div style={{textAlign:'center'}}>
<Button 
  variant="contained" 
  color="primary" 
  type="submit"
  disabled={button}
  >
  Log In
</Button>
</div>
</form>

<div style={{textAlign:'center',margin:'20px'}}>
    <h3>Or</h3>

    <Button 
      variant='contained'
      color='secondary'
      onClick={sighInWithGoogle}>
    <GoogleIcon/>Login With Google</Button>
</div>
<div>
<p>
            Register new account?{" "}
            <Button
            variant='contained'
            color='success'>

           <Link to='/sighup'>Sigh Up</Link>
            </Button>
          </p>
</div>

</div>
  );
}

export default Login;
