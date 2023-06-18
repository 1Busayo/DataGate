import { Link } from "react-router-dom";

import { Select, Box, TextField, Input, Icon, Button ,Typography,Stack} from '@mui/material';
import { Upload } from "@mui/icons-material";
// import millify from 'millify';

// import DefaultImage from '../assets/images/house.jpg';


const InitialState = ({
 acc,
  addr,
  setAddr,
  title,
  setTitle,
  file,
  setFile,
  desc,
  setDesc,
  upload,
}) => {

 return <Box >


 <Typography sx={styles.pageTitle} variant="h5">Upload Data</Typography>
 <Box sx={styles.rowContainer}>
         
     
 <form>
 <Stack spacing={2} direction="column" sx={{marginBottom: 4}}> 
         <TextField
                 type="text"
                 variant='outlined'
                 color='secondary'
                 label="Wallet Address"
                 name="addr"
              
                 value={acc}
                 readOnly
                 onInput={(e) => setAddr(e.target.value)}
                 fullWidth
                 required
             />
             <TextField
                 type="text"
                 variant='outlined'
                 color='secondary'
                 label="Title"
                 name="title"
                 onChange={e => setTitle(e.target.value)}
                 value={title}
                 fullWidth
                 required
             />
             <TextField
                 type="text"
                 variant='outlined'
                 color='secondary'
                 label="Description"
                 onChange={e => setDesc(e.target.value)}
                 name="desc"
                 value={desc}
                 fullWidth
                 required
             />
   
       
        <Button
        variant="outlined"
        component="label"
        >
        Upload File
        <input
          id="btn-upload"
          name="fil"
          style={{ display: 'none' }}
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
     
        />
        </Button>
      </Stack>
    
         <Button variant="contained" color="primary"
         
         onClick={() => {

            if ( title && desc && file) {
               upload()
            }
          }}
         
         
         >Submit</Button>


     </form>
    


     </Box>;
</Box>;


 
}

export default InitialState;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
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

