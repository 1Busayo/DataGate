import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'; import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'; 
import StyleIcon from '@mui/icons-material/Style';
import { Link } from "react-router-dom";

function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();



    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}

    >
        <Box sx={styles.avatarContainer}>
        
     { window.location.pathname.split('/')[1] == 'publisher' ?     <Avatar sx={styles.avatar} alt="Masoud" src="/src/assets/avatars/masoud.jpeg" />
     :
     <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
     }
            {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Your Channel</Typography> : null}
            {!collapsed ? <Typography variant="overline">React with Masoud</Typography> : null}
        </Box>


     { window.location.pathname.split('/')[1] == 'publisher' ?
            <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            
        
            <MenuItem active={ window.location.pathname === "/publisher/upload" } component={<Link to="publisher/upload" />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Upload data </Typography></MenuItem>
            <MenuItem active={ window.location.pathname === "/publisher/mydata" } component={<Link to="publisher/mydata" />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">My data </Typography></MenuItem>
            
            </Menu>
      :
 <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}>
            
        
            <MenuItem active={window.location.pathname === "/content"} component={<Link to="/content" />} icon={<SourceOutlinedIcon />}> <Typography variant="body2">Datasets </Typography></MenuItem>
            {/* <MenuItem active={window.location.pathname === "/analytics"} component={<Link to="/analytics" />} icon={<AnalyticsOutlinedIcon />}> <Typography variant="body2">Analytics </Typography></MenuItem>
            <MenuItem active={window.location.pathname === "/customization"} component={<Link to="/customization" />} icon={<StyleOutlinedIcon />}> <Typography variant="body2">Customization </Typography></MenuItem >
            <MenuItem active={window.location.pathname === "/dashboard"} component={<Link to="/dashboard" />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2">Dashboard</Typography> </MenuItem> */}
        </Menu >

      } 


       
    </Sidebar >;
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}