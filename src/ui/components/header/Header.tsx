import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";

export const Header = () => {
    return (
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
    )
}