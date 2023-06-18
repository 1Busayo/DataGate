import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from "../components/ColorText";
import LatestVideoCard from "../components/LatestVideoCard";

function Viewdataset() {
    return <Box>
        <Typography sx={styles.pageTitle} variant="h5">View Dataset</Typography>
        <Box sx={styles.columnsContainer}>

         
            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Details</Typography>
                    <Box sx={styles.postAuthorSection}>
                        <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                        <Typography sx={styles.postMeta}>React with Masoud</Typography>
                        <Typography sx={styles.postMeta}>Jan 19, 2023</Typography>
                    </Box>
                    <Typography variant="body2">I asked chatGPT to tell me a joke about react js, he is not only smart but also funny :)) we are going to have a video about it tomorrow.</Typography>
                    <Divider sx={styles.divider} />
                    <Typography variant="h6">Summary</Typography>
                    <Typography variant="h8"><ColorText color='neutral.normal'>Last 28 days</ColorText></Typography>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Views</Typography>
                        <Typography variant="h7">225</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Watch Time (hours)</Typography>
                        <Typography variant="h7">30</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Estimated Revenue</Typography>
                        <Typography variant="h7">$450.00</Typography>
                    </Box>

                    <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
                </CardContent>
            </Card>

        </Box>
    </Box>;
}

export default Viewdataset;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '780px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}

