import React, {ChangeEvent, useEffect, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from "react-redux";
import {getCardsTC, setOptionsAC} from "../../../bll/image-reducer";
import {useDebounce} from "../../common/customHook/use-debounce";
import { AppRootStateType } from "../../../bll/store";


export const SearchForm = () => {

    //HOOK
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    
    const debouncedSearchTerm = useDebounce(searchTerm, 1000)

    useEffect(() => {
            if (debouncedSearchTerm) {
                dispatch(setOptionsAC({page: 1, text: debouncedSearchTerm}))
                dispatch(getCardsTC())
            }
        }, [debouncedSearchTerm]
    )

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.currentTarget.value)
    }

    return (
        <Grid container style={{padding: "30px"}}>
            <TextField
                id="standard-textarea"
                label="Find pictures"
                multiline
                style={{width: "100%"}}
                onChange={onChangeHandler}
            />
        </Grid>
    )
}