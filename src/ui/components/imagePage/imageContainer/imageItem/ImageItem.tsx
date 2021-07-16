import React, {ChangeEvent, useState} from 'react';
import {Button, Grid, Paper, TextField} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import s from './ImageItem.module.css';


type ImageItemPropsType = {
    id: string
    owner: string
    secret: string
    server: string
    farm: number
    title: string
}

export const ImageItem: React.FC<ImageItemPropsType> = (
    {id, owner, secret, server, farm, title}
) => {
    //HOOK
    const [changeButton, setChangeButton] = useState(true);
    const [valueTags, setValueTags] = React.useState('');

    const handleChangeTagsImput = (event: ChangeEvent<HTMLInputElement>) => {
        setValueTags(event.target.value);
    };

    const picUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

    const onClickBookmarkButtonHandler = () => {
        setChangeButton(false)
    }
    const onClickRemoveButtonHandler = () => {
        setChangeButton(true)
    }

    return (
        <Grid item>
            <Paper elevation={3} style={{padding: "10px"}}>
                <div className={s.photoBox}>
                    <img src={picUrl} width="200px" height="200px"/>
                </div>
                <div>
                    {changeButton
                        ? <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<BookmarkBorderIcon/>}
                            style={{margin: "10px 0"}}
                            onClick={onClickBookmarkButtonHandler}
                        >
                            Bookmark it!
                        </Button>
                        : <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            startIcon={<DeleteIcon/>}
                            style={{margin: "10px 0"}}
                            onClick={onClickRemoveButtonHandler}
                        >
                            Remove it
                        </Button>}
                </div>
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="some tags?"
                        multiline
                        size="small"
                        maxRows={4}
                        value={valueTags}
                        onChange={handleChangeTagsImput}
                        variant="outlined"
                        style={{marginBottom: "10px", width: "100%"}}
                    />
                </div>
            </Paper>
        </Grid>
    )

}