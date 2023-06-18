import {useState, useContext} from 'react'
import { Web3Context } from '../../context/Web3Context'
// import {  useRouter } from 'next/router';
import InitialState from '../../components/upload/InitialState'
import LoadingState from '../../components/upload/LoadingState'
import FinishedState from '../../components/upload/FinishedState'
import { pinJSONToIPFS, pinFileToIPFS } from '../../lib/pianta'
import {  postmimes } from '../../lib/client'
 import {ethers} from 'ethers'
 import { contractABI,  contractAddress , contracTipABI} from '../../lib/constants'
 import { useNavigate  } from 'react-router-dom';

let metamask

if (typeof window !== 'undefined') {
  metamask = window.ethereum
}


// const getEthereumContract = async () => { 
//   if (!metamask) return
//   const provider = new ethers.providers.Web3Provider(metamask)
//   const signer = provider.getSigner()
//   const transactionContract = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//     )

//   return transactionContract



// }

const Upload = () => {
   const { currentAccount, setAppStatus } = useContext(Web3Context)
  const router = useNavigate()

  const [addr, setAddr] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('initial')
  const [file, setFile] = useState()
  const [desc,setDesc] = useState('')
 

  const upload = async () => {
    if ( !title || !desc || !file) return
    setStatus('loading')

    const pinataMetaData = {
      name: `${title} - ${desc}`,
    }

console.log('stat', status)

    const ipfsImageHash = await pinFileToIPFS(file, pinataMetaData)


//     /** add image as NFT */
//     // await client
//     //   .patch(currentAccount)
//     //   .set({ profileImage: ipfsImageHash })
//     //   .set({ isProfileImageNft: true })
//     //   .commit()

    const imageMetaData  = {
      type: title,
      description: desc,
      image: `ipfs://${ipfsImageHash}`,
    }

    const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)

    // const contract = await getEthereumContract()

    // const transactionParameters = {
    //   to: contractAddress,
    //   from: currentAccount,
    //   data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    // }

    try {

    
  
//    const tweetId = `${currentAccount}_${Date.now()}`
//   //  const tweetDoc = {
//   //   _type: 'mimes',
//   //   _id: tweetId,
//   //   mimeTitle: imageMetaData.name,
//   //   mimeDesc: imageMetaData.description,
//   //   mimeImage: ipfsImageHash,
//   //   timestamp: new Date(Date.now()).toISOString(),
//   //   author: {
//   //     _key: tweetId,
//   //     _ref: currentAccount,
//   //     _type: 'reference',
//   //   },
//   // }
  

const tweetDoc = {
    walletaddress: currentAccount,
     mimeTitle: imageMetaData.type,
     mimeDesc: imageMetaData.description,
     mimeImage: ipfsImageHash
}
await postmimes(tweetDoc);


//   // await client.createIfNotExists(tweetDoc)
  
//   // await client.patch(currentAccount) .setIfMissing({ mimes: [] })
//   //   .insert('after', 'mimes[-1]', [
//   //     {
//   //       _key: tweetId,
//   //       _ref: tweetId,
//   //       _type: 'reference',
//   //     },
//   //   ])
//   //   .commit()
  

  

    
 
    //   await metamask.request({
    //     method: 'eth_sendTransaction',
    //     params: [transactionParameters],
    //   })

      setStatus('finished')
    } catch (error) {
      console.log(error)
      setStatus('finished')
    }


  }
const modalChildren = (modalStatus = status) => {
  switch (modalStatus) {
    case 'initial':
      return (
        <InitialState
          addr={addr}
          desc = {desc}
          setDesc = {setDesc}
          acc={currentAccount}
          setAddr={setAddr}
          title={title}
          setTitle={setTitle}
          file = {file}
          setFile={setFile}
         
          upload={upload}
        />
      )
   
    case 'loading':
      return <LoadingState />

    case 'finished':
      return <FinishedState />

    default:
      router.push('/')
      setAppStatus('error')
      break
  }
}


  return <> {(modalChildren(status))} </>
}

export default Upload