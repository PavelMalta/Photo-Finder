import {Dispatch} from "redux"
import {imageAPI, ImageQueryParamsType, PhotosType} from "../dal/api"
import {AppRootStateType} from "./store"

const initialState = {
    imageData: {
        page: 1,
        pages: 0,
        perpage: 20,
        total: 0,
        photo: []
    },
    options: {per_page: 20},
    isSearching: false,
    isShowImage: false
}

export const imageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-IMAGE":
            return {...state, imageData: action.data}
        case "SET-OPTIONS":
            return {...state, options: {...state.options, ...action.options}}
        case "SET-OPTIONS-PAGE":
            return {...state, options: {...state.options, page: action.page}}
        case "IS-SEARCHING":
            return {...state, isSearching: action.isSearching}
        case "IS-SHOW-IMAGE":
            return {...state, isShowImage: action.isShowImage}
        default:
            return state
    }
}

//Actions
const getImageAC = (data: PhotosType) => ({type: "GET-IMAGE", data} as const)
export const setOptionsAC = (options: ImageQueryParamsType) => ({type: "SET-OPTIONS", options} as const)
export const setOptionsPageAC = (page: number) => ({type: "SET-OPTIONS-PAGE", page} as const)
const isSearchingAC = (isSearching: boolean) => ({type: "IS-SEARCHING", isSearching} as const)
export const isShowImageAC = (isShowImage: boolean) => ({type: "IS-SHOW-IMAGE", isShowImage} as const)

//Thunks
export const getCardsTC = () => (dispatch: Dispatch<ActionType>, getState: () => AppRootStateType) => {
    dispatch(isSearchingAC(true))

    const reduxOptions = getState().image.options
    imageAPI.getImage(reduxOptions)
        .then(res => {
            dispatch(getImageAC(res.data.photos))
        })
        .finally(() => {
            dispatch(isSearchingAC(false))
            dispatch(isShowImageAC(true))
        })
}

//Types
type InitialStateType = {
    imageData: PhotosType
    options: ImageQueryParamsType
    isSearching: boolean
    isShowImage: boolean
}

type ActionType = ReturnType<typeof getImageAC>
                | ReturnType<typeof setOptionsAC>
                | ReturnType<typeof setOptionsPageAC>
                | ReturnType<typeof isSearchingAC>
                | ReturnType<typeof isShowImageAC>