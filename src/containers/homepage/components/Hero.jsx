import React  from 'react';
import  { useContext } from 'react';
import { Web3Context } from '../../../context/Web3Context';
import { Grid, Typography, Button, Box, Stack } from '@mui/material';
import myteam from '../images/myteam.jpg';
import useStyles from '../styles/styles';

const Hero = () => {

  const {appStatus, connectToWallet} = useContext(Web3Context)
  const classes = useStyles();


  const app = (status = appStatus ) =>{
    switch (status) {
      case 'connected':
        return userLoggedIn
        
  
      case 'notConnected':
        return noUserFound
  
      // case 'noMetaMask':
      //   return noMetaMaskFound
  
      // case 'error':
      //   return error
  
      default:
        return loading
    }
  } 


  const userLoggedIn = ( 

 <>
    <Button
    variant="contained"
    color="primary"
    sx={{ width: '200px', fontSize: '16px' }}
    href="/viewdataset"
  >
  Data Consumer
  </Button> 
   
   
    <Button
    variant="contained"
    color="primary"
    sx={{ width: '200px', fontSize: '16px' }}
    href="/publisher/upload"
  >
  Data Publisher
  </Button> 
   
</>
  )



  const noUserFound = ( 

    <Button
    variant="contained"
    color="primary"
    sx={{ width: '200px', fontSize: '16px' }}
    onClick={() => connectToWallet()}
  >
  Connect  Wallet
  </Button> 
   

  )


  const loading = (
    
      <div>Loading...</div>
  
  )






  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
         Monitize Your Scientfic Research
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
          Provide your copyrighted datasets  as a Data provider for Data consumers, who are ready to pay for your data 
          </Typography>

          <Stack  spacing={2}  direction="row">



          {app(appStatus)}

          </Stack>
          
          {/* <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack> */}
        
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;