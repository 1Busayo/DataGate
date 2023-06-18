import { Select, Box, TextField, Input, Icon, Button ,Typography,Stack} from '@mui/material';
 import { GridLoader } from 'react-spinners'
import { css } from '@emotion/react'

// const style = {
//   wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
//   title: `font-semibold text-xl mb-6`,
// }
// const cssOverride = css`
//   display: block;
//   margin: 0 auto;
//   border-color: white;
// `

const LoadingState = () => {
  return <Box>
    
 <Typography sx={styles.pageTitle} variant="h5">Upload in progress..</Typography>
 {/* <Box sx={styles.rowContainer}> */}
 <Box sx={styles.center}>
      <GridLoader color={'#000'} loading={true} size={30} />
    </Box>
    </Box>
  // </Box>
}

export default LoadingState

const styles = {
  pageTitle: {
      mb: 2
  },
  center: {
    display:"flex" ,
    widt:500,
    height:80,

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

