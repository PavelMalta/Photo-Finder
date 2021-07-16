import React from 'react';
import {Paper, Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import { Prompt } from './prompt/Prompt';

export const ImagePage = () => {
    //HOOK
    const isShowImage = useSelector<AppRootStateType, boolean>(state => state.image.isShowImage)


    return (
        <>
            {!isShowImage
                ? <Prompt/>
                : <Grid container spacing={5}>
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
            }
        </>
    )
}