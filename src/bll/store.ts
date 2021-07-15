import {applyMiddleware, combineReducers, createStore} from "redux"
import {imageReducer} from "./image-reducer"
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    image: imageReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;