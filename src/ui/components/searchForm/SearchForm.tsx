import React, {ChangeEvent, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from "react-redux";
import { getCardsTC } from "../../../bll/image-reducer";


export const SearchForm = () => {

    //HOOK
    const [inputValue, setInputValue] = useState<string>("")
    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        dispatch(getCardsTC({page: 1, text: inputValue}))
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