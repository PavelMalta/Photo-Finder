import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../bll/store';
import { ImageContainer } from './imageContainer/ImageContainer';
import { Prompt } from './prompt/Prompt';

export const ImagePage = () => {
    //HOOK
    const isShowImage = useSelector<AppRootStateType, boolean>(state => state.image.isShowImage)
    
    return (
        <>
            {!isShowImage
                ? <Prompt/>
                : <ImageContainer/>
            }
        </>
    )
}