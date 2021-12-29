import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink, useLocation, Link} from 'react-router-dom'
import {
    Person, Message, People,
    Image, Movie, Logout
} from '@mui/icons-material';
import Routes from "./../../pages/routes/Routes"
import Header from "../header/Header";
import {logOut} from "../../store/reducers/session";
import {useDispatch} from "react-redux";
import {resetProfile} from "../../store/reducers/profile";



const drawerWidth = 240;



function LeftNavBar(props) {
    const {pathname} = useLocation();
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logOutHandler = () => {
        localStorage.removeItem("token")
        dispatch(logOut());
        dispatch(resetProfile());
    };

    const drawer = (
        <div>
            <Toolbar/>
            <Divider/>
            <List>
                <NavLink
                    to='/profile'>
                    <ListItem
                        selected={pathname === '/profile'}
                        button>
                        <ListItemIcon><Person/> </ListItemIcon>
                        <ListItemText primary="Profile"/>
                    </ListItem>
                </NavLink>

                <NavLink
                    to='/friends'>
                    <ListItem
                        selected={pathname === '/friends'}
                        button>
                        <ListItemIcon><People/> </ListItemIcon>
                        <ListItemText primary="Friends"/>
                    </ListItem>
                </NavLink>


                <NavLink
                    to='/messages'>
                    <ListItem
                        selected={pathname === '/messages'}
                        button>
                        <ListItemIcon><Message/> </ListItemIcon>
                        <ListItemText primary="Messages"/>
                    </ListItem>
                </NavLink>


            </List>
            <Divider/>
            <List>
                <NavLink
                    to='/photos'>
                    <ListItem
                        selected={pathname === '/photos'}
                        button>
                        <ListItemIcon><Image/> </ListItemIcon>
                        <ListItemText primary="Photos"/>
                    </ListItem>
                </NavLink>

                <NavLink
                    to='/videos'>
                    <ListItem
                        selected={pathname === '/videos'}
                        button>
                        <ListItemIcon><Movie/> </ListItemIcon>
                        <ListItemText primary="Videos"/>
                    </ListItem>
                </NavLink>

            </List>
            <Divider/>
            <ListItem
                onClick={logOutHandler}
                button>
                <ListItemIcon><Logout/> </ListItemIcon>
                <ListItemText primary="Log out"/>
            </ListItem>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Header/>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="Started"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <main>
                    <div />
                    <Typography paragraph>
                        <Routes/>
                    </Typography>
                </main>
            </Box>
        </Box>
    );
}

LeftNavBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default LeftNavBar;


// import React from 'react';
// import {NavLink, useLocation, Link} from 'react-router-dom'
// import AppBar from '@mui/material/AppBar';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import Hidden from '@mui/material/Hidden';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import {
//     Person, Message, People,
//     Image, Movie
// } from '@mui/icons-material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import makeStyles from '@mui/styles/makeStyles';
// import {Header} from "../index"
// import Routes from "./../../pages/routes/Routes"
//
// const drawerWidth = 240;
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//     },
//     drawer: {
//         [theme.breakpoints.up('sm')]: {
//             width: drawerWidth,
//             flexShrink: 0,
//         },
//     },
//     appBar: {
//         [theme.breakpoints.up('sm')]: {
//             width: `calc(100% - ${drawerWidth}px)`,
//             marginLeft: drawerWidth,
//         },
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         [theme.breakpoints.up('sm')]: {
//             display: 'none',
//         },
//     },
//
//
//      //  WE are here - let's continue
//
//
//     // necessary for content to be below app bar
//     toolbar: {},
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//     },
// }));
//
// function LeftNavBar(props) {
//     const {pathname} = useLocation();
//     const {window} = props;
//     const classes = useStyles();
//     const theme = useTheme();
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//
//     const handleDrawerToggle = () => {
//         setMobileOpen(!mobileOpen);
//     };
//
//
//     const drawer = (
//         <div>
//             <div className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters header_left_space">
//                 Name will be here
//             </div>
//
//             <Divider/>
//             <List>
//                 <NavLink
//                     to='/profile'>
//                     <ListItem
//                         selected={pathname === '/profile'}
//                         button>
//                         <ListItemIcon><Person/> </ListItemIcon>
//                         <ListItemText primary="Profile"/>
//                     </ListItem>
//                 </NavLink>
//
//                 <NavLink
//                     to='/friends'>
//                     <ListItem
//                         selected={pathname === '/friends'}
//                         button>
//                         <ListItemIcon><People/> </ListItemIcon>
//                         <ListItemText primary="Friends"/>
//                     </ListItem>
//                 </NavLink>
//
//
//                 <NavLink
//                     to='/messages'>
//                     <ListItem
//                         selected={pathname === '/messages'}
//                         button>
//                         <ListItemIcon><Message/> </ListItemIcon>
//                         <ListItemText primary="Messages"/>
//                     </ListItem>
//                 </NavLink>
//
//
//             </List>
//             <Divider/>
//             <List>
//                 <NavLink
//                     to='/photos'>
//                     <ListItem
//                         selected={pathname === '/photos'}
//                         button>
//                         <ListItemIcon><Image/> </ListItemIcon>
//                         <ListItemText primary="Photos"/>
//                     </ListItem>
//                 </NavLink>
//
//                 <NavLink
//                     to='/videos'>
//                     <ListItem
//                         selected={pathname === '/videos'}
//                         button>
//                         <ListItemIcon><Movie/> </ListItemIcon>
//                         <ListItemText primary="Videos"/>
//                     </ListItem>
//                 </NavLink>
//
//             </List>
//         </div>
//     );
//
//     const container = window !== undefined ? () => window().document.body : undefined;
//
//     return (
//         <div className={classes.root}>
//             <CssBaseline/>
//             <AppBar position="fixed" className={classes.appBar}>
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         className={classes.menuButton}
//                         size="large">
//                         <MenuIcon/>
//                     </IconButton>
//                     <Typography variant="h6" noWrap>
//                        <Header/>
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <nav className={classes.drawer} aria-label="mailbox folders">
//                 {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//                 <Hidden smUp implementation="css">
//                     <Drawer
//                         container={container}
//                         variant="temporary"
//                         anchor={theme.direction === 'rtl' ? 'right' : 'left'}
//                         open={mobileOpen}
//                         onClose={handleDrawerToggle}
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         ModalProps={{
//                             keepMounted: true, // Better open performance on mobile.
//                         }}
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//                 <Hidden smDown implementation="css">
//                     <Drawer
//                         classes={{
//                             paper: classes.drawerPaper,
//                         }}
//                         variant="permanent"
//                         open
//                     >
//                         {drawer}
//                     </Drawer>
//                 </Hidden>
//             </nav>
//             <main className={classes.content}>
//                 <div className={classes.toolbar}/>
//                 <Typography paragraph>
//                     <Routes/>
//                 </Typography>
//             </main>
//         </div>
//     );
// }
//
// export default LeftNavBar;
