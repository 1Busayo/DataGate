import { Table,TableBody,TableCell,TableContainer, TableHead ,Box,TableRow ,Typography,Paper , Button
} from '@mui/material';
 import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'
import  React , {useContext , useNavig} from 'react';
import { Web3Context } from '../context/Web3Context'
import { createBrowserRouter, Route, useNavigate  ,Link} from 'react-router-dom';

// const style = {
//   wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
//   title: `font-semibold text-xl mb-6`,
// }
// const cssOverride = css`
//   display: block;
//   margin: 0 auto;
//   border-color: white;
// `

const Content = () => {

    const route = useNavigate()

    const {uData} = useContext(Web3Context)


 
 return <Box>
    
 <Typography sx={styles.pageTitle} variant="h5"> Data List </Typography>
  {/* <Box sx={styles.rowContainer}> 
 <Box sx={styles.center}> */}





    <TableContainer sx={styles.center}  component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell align="right">Wallet Address</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">File</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


       

          {uData.map((tweet,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell align="right">{tweet.timestamp}</TableCell>
              <TableCell align="right">{tweet.mimetitle}</TableCell>
              <TableCell align="right">{tweet.mimedesc}</TableCell>
              <TableCell align="right">
                
              <Button component={Link} to={`/payview/${tweet.mimeimage}`} variant="contained" color="primary">
  About Page
</Button>
                 {/* <a target='_blank'    href={`payview/${tweet.mimeimage}`}>Pay to view</a> */}
     

</TableCell> 
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

    </Box>
//     </Box>
//    </Box>
}

export default Content

const styles = {
  pageTitle: {
      mb: 2
  },
  center: {
    display:"flex" ,
    // widt:500,
    // height:80,

    alignItems:"center",
    justifyContent:"center"
  },
  rowContainer: {
      width: '100%',
      maxWidth: 900,
      border: 1,
      borderColor: 'neutral.medium',
      borderRadius: 1,
      mt: 2,
      p: 2,
      display: 'flex',
      alignItems: 'flex-start',
      justifyItems: 'center'
  },
  rowIcon: {
      fontSize: 40,
      color: 'neutral.normal'
  },
  secondColumn: {
      ml: 1
  },
  rowLink: {
      ml: 'auto'
  }
}

