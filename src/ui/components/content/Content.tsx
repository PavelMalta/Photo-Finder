import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { routes } from '../../router/routes';
import { BookmarksPage } from '../bookmarksPage/BookmarksPage';
import { PhotoFinderPage } from '../photoFinderPage/PhotoFinderPage';

export const Content = () => {
    return (
        <>
            <Switch>
                <Route exact path={routes.photoFinder} render={() => <PhotoFinderPage/>}/>
                <Route exact path={routes.bookmarks} render={() => <BookmarksPage/>}/>
            </Switch>
        </>
    )
}