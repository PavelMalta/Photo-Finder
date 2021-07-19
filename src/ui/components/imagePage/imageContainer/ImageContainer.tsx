import {Grid} from '@material-ui/core';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addImageToBookmarksAC} from '../../../../bll/bookmarks-reducer';
import {getCardsTC, setOptionsPageAC} from '../../../../bll/image-reducer';
import {AppRootStateType} from '../../../../bll/store';
import {PhotoType} from '../../../../dal/api';
import {PaginationRounded} from '../../../common/pagination/PaginationRounded';
import {ImageItem} from './imageItem/ImageItem';

export const ImageContainer = () => {

    //HOOK
    const photoData = useSelector<AppRootStateType, Array<PhotoType>>(state => state.image.imageData.photo)
    const page = useSelector<AppRootStateType, number>(state => state.image.imageData.page)
    const pages = useSelector<AppRootStateType, number>(state => state.image.imageData.pages)
    const dispatch = useDispatch()

    const onChangePage = (page: number) => {
        dispatch(setOptionsPageAC(page))
        dispatch(getCardsTC())
    }

    const addImageFromBookmarks = (imageId: string, imageUrl: string, valueTags: string) => {
        dispatch(addImageToBookmarksAC(imageId, imageUrl, valueTags))
    }

    return (
        <>
            <Grid container style={{marginBottom: "30px"}}>
                <PaginationRounded page={page}
                                   count={pages}
                                   onChangePage={onChangePage}/>
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
                                       addImageFromBookmarks={addImageFromBookmarks}
                    />)
                })}
            </Grid>
        </>
    )
}