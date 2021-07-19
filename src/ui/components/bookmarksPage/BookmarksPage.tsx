import React from 'react';
import {Grid} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../bll/store';
import { ImageType } from '../../../bll/bookmarks-reducer';
import { BookmarksImage } from './bookmarksImage/BookmarksImage';

export const BookmarksPage = () => {

    //HOOK
    const bookmarksImageData = useSelector<AppRootStateType, Array<ImageType>>(state => state.bookmarks.bookmarksImage)

    return (
        <Grid container spacing={5} style={{justifyContent: "center"}}>
            {bookmarksImageData.map(item => {
                return <BookmarksImage key={item.imageId}
                                       imageId={item.imageId}
                                       imageUrl={item.imageUrl}
                                       valueTags={item.valueTags}

                />
            })}
        </Grid>
    )
}