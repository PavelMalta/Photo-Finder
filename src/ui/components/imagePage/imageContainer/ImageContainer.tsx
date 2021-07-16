import {Grid} from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../bll/store';
import {PhotoType} from '../../../../dal/api';
import {ImageItem} from './imageItem/ImageItem';

export const ImageContainer = () => {

    //HOOK
    const photoData = useSelector<AppRootStateType, Array<PhotoType>>(state => state.image.imageData.photo)


    return (
        <Grid container spacing={5} style={{justifyContent: "center"}}>
            {photoData.map(item => {
                return (<ImageItem key={item.id}
                                   id={item.id}
                                   owner={item.owner}
                                   secret={item.secret}
                                   server={item.server}
                                   farm={item.farm}
                                   title={item.title}
                />)
            })}
        </Grid>
    )
}