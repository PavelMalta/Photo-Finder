import React from 'react';
import {Grid} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import {ImageType, removeImageAC} from '../../../bll/bookmarks-reducer';
import {BookmarksImage} from './bookmarksImage/BookmarksImage';

export const BookmarksPage = () => {

    //HOOK
    const bookmarksImageData = useSelector<AppRootStateType, Array<ImageType>>(state => state.bookmarks.bookmarksImage)
    const dispatch = useDispatch()
    
    const removeImage = (imageId: string) => {
        dispatch(removeImageAC(imageId))
    }
    
    return (
        <Grid container spacing={5} style={{justifyContent: "center", padding: "30px"}}>
            {bookmarksImageData.map(item => {
                return <BookmarksImage key={item.imageId}
                                       imageId={item.imageId}
                                       imageUrl={item.imageUrl}
                                       valueTags={item.valueTags}
                                       removeImage={removeImage}
                />
            })}
        </Grid>
    )
}