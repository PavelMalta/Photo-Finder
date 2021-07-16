import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {SearchForm} from './components/searchForm/SearchForm';
import { ImagePage } from './components/imagePage/ImagePage';

function App() {
    return (
        <div>
            <Header/>
            <Container fixed>
                <SearchForm/>
                <ImagePage/>
            </Container>
        </div>
    );
}

export default App;
