import { Container } from '@material-ui/core';
import React from 'react';
import { ImagePage } from '../imagePage/ImagePage';
import {SearchForm} from '../searchForm/SearchForm';

export const PhotoFinderPage = () => {
    return (
        <Container fixed>
            <SearchForm/>
            <ImagePage/>
        </Container>
    )
}
