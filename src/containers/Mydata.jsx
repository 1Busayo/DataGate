import { Table,TableBody,TableCell,TableContainer, TableHead ,Box,TableRow ,Typography,Paper , Link} from '@mui/material';
 import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'
import  React , {useContext} from 'react';
import { Web3Context } from '../context/Web3Context'

// const style = {
//   wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
//   title: `font-semibold text-xl mb-6`,
// }
// const cssOverride = css`
//   display: block;
//   margin: 0 auto;
//   border-color: white;
// `

const Mydata = () => {


    const {uData} = useContext(Web3Context)


 function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 return <Box>
    
 <Typography sx={styles.pageTitle} variant="h5">My Data</Typography>
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
              <Link
  component="button"
  variant="body2"
  onClick={() => {
    console.info("I'm a button.");
    href=`https://ipfs.io/ipfs/${tweet.mimeimage}`
  }}
>
  View Data
</Link> </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

    </Box>
//     </Box>
//    </Box>
}

export default Mydata

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

