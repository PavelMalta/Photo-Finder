import {Button, Grid, Paper } from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import s from '../../imagePage/imageContainer/imageItem/ImageItem.module.css'

type BookmarksImagePropsType = {
    imageId: string,
    imageUrl: string
    valueTags: string
}

export const BookmarksImage: React.FC<BookmarksImagePropsType> = ({imageId, imageUrl, valueTags}) => {


    return (
        <Grid item>
            <Paper elevation={3} style={{padding: "10px"}}>
                <div className={s.photoBox}>
                    <img src={imageUrl} width="250px" height="200px"/>
                </div>
                <div>
                     <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            startIcon={<DeleteIcon/>}
                            style={{margin: "10px 0"}}
                            onClick={()=>{}}
                        >
                            Remove it
                        </Button>
                </div>
            </Paper>
        </Grid>
    )
}