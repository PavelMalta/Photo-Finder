import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    LinearProgress,
    Divider,
    List,
    Link,
    ListItem,
    ListItemIcon,
    ListItemText,
    Drawer,
    Menu,
    MenuItem
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import CloudIcon from "@material-ui/icons/Cloud";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {routes} from '../../router/routes';

export const Header = () => {
    //HOOK
    const isSearching = useSelector<AppRootStateType, boolean>(state => state.image.isSearching)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Image Finder/Поиск фото
                    </Typography>
                    <AccountCircle fontSize="large" style={{marginLeft: "auto"}}/>
                </Toolbar>
            </AppBar>
            {isSearching && <LinearProgress color={"secondary"}/>}

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink to={routes.photoFinder}>
                    <MenuItem onClick={handleClose}><CloudIcon/></MenuItem>
                </NavLink>
                <NavLink to={routes.bookmarks}>
                    <MenuItem onClick={handleClose}><BookmarksIcon/></MenuItem>
                </NavLink>
            </Menu>
        </>
    )
}