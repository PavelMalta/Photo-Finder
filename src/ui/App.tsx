import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {AppBar, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {SearchForm} from './components/searchForm/SearchForm';
import { ImagePage } from './components/imagePage/ImagePage';
import { Content } from './components/content/Content';

function App() {
    return (
        <div>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
