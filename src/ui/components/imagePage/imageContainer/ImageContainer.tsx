import {Grid} from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../bll/store';
import {PhotoType} from '../../../../dal/api';
import {PaginationRounded} from '../../../common/pagination/PaginationRounded';
import {ImageItem} from './imageItem/ImageItem';

export const ImageContainer = () => {

    //HOOK
    const photoData = useSelector<AppRootStateType, Array<PhotoType>>(state => state.image.imageData.photo)


    return (
        <>
            <Grid container style={{marginBottom: "30px"}}>
                <PaginationRounded page={1} count={100} onChangeHandler={() => {
                }}/>
            </Grid>
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
        </>
    )
}