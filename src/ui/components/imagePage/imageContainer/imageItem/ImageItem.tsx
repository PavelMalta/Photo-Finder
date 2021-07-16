import {Grid, Paper} from '@material-ui/core';
import React from 'react';
import s from './ImageItem.module.css'

type ImageItemPropsType = {
    id: string
    owner: string
    secret: string
    server: string
    farm: number
    title: string
}

export const ImageItem: React.FC<ImageItemPropsType> = (
    {id, owner, secret, server, farm, title}
) => {

    const picUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

    return (
        <Grid item>
            <Paper elevation={3} style={{padding: "10px"}}>
                <div className={s.photoBox}>
                    <img src={picUrl} width="200px" height="200px"/>
                </div>
            </Paper>
        </Grid>
    )

}