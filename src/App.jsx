import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';

import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import SideNav from './components/SideNav';
import AppHeader from './components/AppHeader';
import theme from './config/theme';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes';
import Home from './containers/Home';

// import hometheme from './config/hometheme';
import Hero from "./containers/homepage/components/Hero";
import Header from "./containers/homepage/components/Header"
import Section from "./containers/homepage/components/Section";
import Testimonial from "./containers/homepage/components/Testimonial";
import ContactUs from "./containers/homepage/components/ContactUs";
import Footer from "./containers/homepage/components/Footer";
import AboutUs from "./containers/homepage/components/AboutUs";

import {Web3Provider} from './context/Web3Context'


import { createTheme, ThemeProvider as ThemePro} from '@mui/material/styles';


const hometheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});


const App = () =>{

  const [appStatus, setAppStatus] = useState('')


  useEffect(()=>{

// setAppStatus(accounts[0])
  } ,[])

  const connectedAddress = window.ethereum.selectedAddress;
  console.log('Connected address:', connectedAddress);

  // const   accounts = async() => { await  window.ethereum.request({method: 'eth_accounts'}); }   
  // console.log('acc', accounts.then((result) => {
  //   console.log(result)
  // }))
  
  if (connectedAddress == null){
  // if (window.ethereum.isConnected()) {


    return (
      
    
        <>
      <ThemePro theme={hometheme}>
          <Web3Provider> 
          {/* <BrowserRouter> */}
        <CssBaseline />
        <Header />
        <Hero />
        <Section />
        <AboutUs />
        <Testimonial />
        <ContactUs />
        <Footer /> 
        {/* </BrowserRouter> */}
          </Web3Provider >
        </ThemePro>

      </>
     
       
       )

   
     
     } else {


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <Web3Provider> 
     

        <ProSidebarProvider>
          <CssBaseline />

          <AppHeader />
          <Box sx={styles.container}>
            {/* <BrowserRouter> */}
              <SideNav />
              <Box
                component={'main'}
                sx={styles.mainSection}
              >
                <AppRoutes />
              </Box>

            {/* </BrowserRouter> */}

          </Box>
        </ProSidebarProvider>

        </Web3Provider> 
      </ThemeProvider>

    </React.Fragment>
  )

     }

}

/**
 * @type {import('@mui/material').SxProps}
 */
const styles = {
  container: {
    display: 'flex',
    bgcolor: 'neutral.light',
    height: 'calc(100% - 64px)'
  },
  mainSection: {
    p: 4,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  }
}
export default App
