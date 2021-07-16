import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, LinearProgress} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';

export const Header = () => {
    //HOOK
    const isSearching = useSelector<AppRootStateType, boolean>(state => state.image.isSearching)

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Image Finder
                    </Typography>
                    <AccountCircle fontSize="large" style={{marginLeft: "auto"}}/>
                </Toolbar>
            </AppBar>
            {isSearching && <LinearProgress color={"secondary"}/>}
        </>
    )
}