import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { auth } from './firebaseAuth';
import Spiner from '../components/Spiner';


const Signup = () => {
  
    const navigate = useNavigate()
    const [value,setvalue] = useState({
        name:'',
        email:'',
        password:''
    });

    const [errormsg,seterrormsg] = useState('');
    const [button,setbutton] = useState(false);
    const [isLoading,setIsLoading] = useState(false)

const signinhandler =(e)=>{
    e.preventDefault()
    if(!value.name || !value.email || !value.password){
        seterrormsg('fill all blanks');
        return;
    }
    seterrormsg('');
    setbutton(true);
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, value.email, value.password)
    .then(async(res) => {
      // Signed in 
      const user = res.user;
      setIsLoading(false);
      await updateProfile(user,{
        displayName:value.name
      });
      navigate('/login')
      // ...
    })
    .catch((error) => {
        setbutton(false)
        seterrormsg(error.message) ;
        setIsLoading(false)
      // ..
    })

}


  return (
       <div className='container'>
       {isLoading && <Spiner/>}
          <form onSubmit={signinhandler}>

          <Typography variant='h3' sx={{textAlign:'center'}}>SignUp</Typography>
      <TextField
        id="name-input"
        label="Name"
        name='name'
        onChange={(e)=>setvalue((prev)=>({...prev,name:e.target.value}))}
        margin="normal"
        required
        fullWidth
      />
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
        Sign Up
      </Button>
     </div>
    </form>


    </div>
  );
}

export default Signup;
