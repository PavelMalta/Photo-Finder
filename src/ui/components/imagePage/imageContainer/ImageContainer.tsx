import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../bll/store';
import { PhotoType } from '../../../../dal/api';

export const ImageContainer = () => {
    
    //HOOK
    const photoData = useSelector<AppRootStateType, Array<PhotoType>>(state => state.image.imageData.photo)
    
    
    return (
        <Grid container spacing={5}>
            <Grid item>
                <Paper elevation={3} style={{padding: "10px"}}>
                    <div>hello</div>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={3} style={{padding: "10px"}}>
                    <div>Pasha</div>
                </Paper>
            </Grid>
            <Grid item>
                <Paper elevation={3} style={{padding: "10px"}}>
                    <div>developer</div>
                </Paper>
            </Grid>
        </Grid>
    )
}