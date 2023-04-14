import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';



const Spiner = () => {
  return (

    <div>
         <Box sx={{width:'100vw',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
         <CircularProgress color="secondary"/>
<CircularProgress color="success" />
<CircularProgress color="inherit" />
    </Box>
   </div>
    )
}

export default Spiner;
