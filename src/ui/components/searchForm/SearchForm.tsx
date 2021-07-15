import React, {ChangeEvent, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";


export const SearchForm = () => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        
    }
    const onClickHandler = () => {
       
    }

    return (
        <Grid container style={{padding: "30px"}}>
            <TextField
                id="standard-textarea"
                label="Find pictures"
                multiline
                style={{ width: "86%"}}
                onChange={onChangeHandler}
            />
            <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SearchIcon />}
                onClick={onClickHandler}
            >
                Search
            </Button>
        </Grid>
    )
}