import { Grid, Paper } from '@material-ui/core';
import React from 'react';

type ImageItemPropsType = {
    owner: string
    secret: string
    server: string
    farm: number
    title: string
}

export const ImageItem: React.FC<ImageItemPropsType> = (
    {owner, secret, server, farm, title}
   ) => {
    
    return (
        <Grid item>
            <Paper elevation={3} style={{padding: "10px"}}>
                <div>{title}</div>
            </Paper>
        </Grid>
    )

}