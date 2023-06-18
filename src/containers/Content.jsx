import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TabPanel from "../components/TabPanel";
import { Link } from 'react-router-dom';

const columns = [
    {
        field: 'thumbnail',
        headerName: 'Title',
        minWidth: 500,
        flex: 4,
        renderCell: (params) => <Box sx={styles.videoColumn}>
            <Box
                component="img"
                sx={styles.videoThumbnail}
                src={params.row.thumbnail}
            />
            <Box sx={styles.videoDetails}>
                <Typography sx={styles.videoTitle}>Must Know JavaScript Interview Questions | Part 1</Typography>
                <Typography sx={styles.videoDescription}>In this video you will learn how to solve JavaScript interview questions.</Typography>
            </Box>
        </Box>,

    },

    {
        field: 'visibility',
        headerName: 'Description',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={styles.iconColumn} >
            <VisibilityOutlinedIcon />
            <Typography sx={styles.iconColumnText}>{params.row.visibility}</Typography>
        </Box>,
    }
    ,

    {
        field: 'monetization',
        headerName: 'Author',
        minWidth: 170,
        flex: 2,
        renderCell: (params) => <Box sx={styles.iconColumn} >
            <AttachMoneyOutlinedIcon />
            <Typography sx={styles.iconColumnText}>{params.row.monetization}</Typography>
        </Box>,
    },
    {
        field: 'views',
        headerName: 'Views',
        minWidth: 170,
        flex: 1,
    },
    {
        field: 'comments',
        headerName: 'Comments',
        minWidth: 170,
        flex: 1,
    }
];

const videos = [
    { id: 1, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },

];

const posts = [
    { id: 1, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 2, thumbnail: 'src/assets/thumbnail2.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
    { id: 3, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },

];

const playlists = [
    { id: 1, thumbnail: 'src/assets/thumbnail.png', visibility: 'Public', monetization: 'On', views: 100, comments: 12 },
];

const lives = [
];


function Content() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">Datasets</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Unstructured data" id='tab-0' />
                <Tab label="Semi-Structured data" id='tab-1' />
                <Tab label="Structured data" id='tab-2' />
                <Tab label="Playlists" id='tab-3' />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        <Link to="/viewdataset">
           
            <DataGrid
                rows={videos}
                columns={columns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
            />
            </Link>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <DataGrid
                rows={lives}
                columns={columns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
            />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <DataGrid
                rows={posts}
                columns={columns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
            />
        </TabPanel>
        <TabPanel value={value} index={3}>
            <DataGrid
                rows={playlists}
                columns={columns}
                pageSize={25}
                rowsPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
            />
        </TabPanel>


    </Box>;
}

export default Content;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    videoThumbnail: {
        width: 120,
    },
    videoTitle: {
        fontSize: '0.8rem',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        '&:hover': {
            textDecoration: 'underline',
            cursor: 'pointer'
        }
    },
    videoDescription: {
        fontSize: '0.7rem',
        color: 'neutral.normal',
        width: 490,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    videoDetails: {
        ml: 2
    },
    videoColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconColumn: {
        display: 'flex',
        alignItems: 'center'
    },
    iconColumnText: {
        ml: 1,
        fontSize: '0.9rem'
    }

}

