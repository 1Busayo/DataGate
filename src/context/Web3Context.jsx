import React , { createContext,useContext, useEffect, useState } from 'react'
import { createBrowserRouter, Route,  Routes, useNavigate  } from 'react-router-dom';
 import { getuserdata } from '../lib/client'

export const Web3Context = createContext()


export const Web3Provider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [tweets, setTweets] = useState([])
  const [uData,setpersonalData] = useState([])
//   const router = Router()

 let  navigate= useNavigate();




useEffect(()=>{
    checkIfWalletIsConnected()
    personalMimes(currentAccount)
  } ,[currentAccount, appStatus])

//   useEffect(() => {
//     if (!currentAccount || appStatus !== 'connected') return
//     getCurrentUserDetails(currentAccount)
//     fetchTweets()
//     personalMimes(currentAccount)
//   }, [currentAccount, appStatus])


const checkIfWalletIsConnected = async () => {
if (!window.ethereum) return setAppStatus('noMetaMask')

try {
    const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
    })
    if (addressArray.length > 0 ){
        //connected
      
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
    //    createUserAccount(addressArray[0])
    }else{
        //not connected
       // router.push('/')
      //navigate

      navigate('/')
        setAppStatus('notConnected')
    }
} catch (error) {
    
}




} 


/** initiates metamask wallet connecton */
const connectToWallet = async () =>{
if(!window.ethereum) return setAppStatus('noMetaMask')
try {
    setAppStatus('loading')
const addressArray = await window.ethereum.request({
    method:'eth_requestAccounts'
})

if (addressArray.length > 0) {
   setAppStatus('connected')
    setCurrentAccount(addressArray[0])
//    createUserAccount(addressArray[0])
} else {
    // router.push('/')
    setAppStatus('notConnected')

    // navigate("/");
        
        
}

} catch (error) {
    setAppStatus('error')
}

}


 /**
   * Gets all the tweets stored in Sanity DB by user.
   */
 const personalMimes = async (userAccount = currentAccount) => {

    setpersonalData([])

    await getuserdata( userAccount ,(result)=>{

      result.forEach(async (item) => {
    
  
       // if (item.author.isProfileImageNft) {
          const newItem = {
            mimetitle: item.mime_title,
            mimedesc:item.mime_desc,
            mimeimage:item.mime_img_url,
            timestamp: item.wallet_address,
            
          }
  
          setpersonalData((prevState) => [...prevState, newItem])
        // } else {
        //   setTweets(prevState => [...prevState, item])
        // }
      })

    })


  

}




    


    return (
         <Web3Context.Provider 
         value={{ 
           appStatus , 
           currentAccount,  
           connectToWallet, 
        //    fetchTweets,
           tweets,
          
        uData,
        //    currentUser, 
        //    getCurrentUserDetails 
           }}>
             {children}
         </Web3Context.Provider>
   )
}