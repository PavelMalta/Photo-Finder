import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { BookmarksPage } from '../bookmarksPage/BookmarksPage';
import { PhotoFinderPage } from '../photoFinderPage/PhotoFinderPage';

export const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} render={() => <PhotoFinderPage/>}/>
                <Route exact path={'/bookmarks'} render={() => <BookmarksPage/>}/>
            </Switch>
        </>
    )
}