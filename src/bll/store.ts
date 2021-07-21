import {applyMiddleware, combineReducers, createStore} from "redux"
import {imageReducer} from "./image-reducer"
import thunkMiddleware from 'redux-thunk'
import { bookmarksReducer } from "./bookmarks-reducer"
import { loadState, saveState } from "./utils/localstorage-utils"

const rootReducer = combineReducers({
    image: imageReducer,
    bookmarks: bookmarksReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunkMiddleware), )

export type AppRootStateType = ReturnType<typeof rootReducer>


store.subscribe(() => {
    saveState({
        bookmarks: store.getState().bookmarks
    })
})

// @ts-ignore
window.store = store;