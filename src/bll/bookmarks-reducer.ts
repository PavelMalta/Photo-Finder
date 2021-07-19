import {Dispatch} from "redux"
import {AppRootStateType} from "./store"

const initialState = {
    bookmarksImage: []
}

export const bookmarksReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-IMAGE-TO-BOOKMARKS":
            return {
                ...state,
                bookmarksImage: [...state.bookmarksImage, {
                    imageId: action.imageId,
                    imageUrl: action.imageUrl,
                    valueTags: action.valueTags
                }]
            }
        case "REMOVE-IMAGE": {
            return {...state, bookmarksImage: state.bookmarksImage.filter(item => item.imageId !== action.imageId)}
        }
        default:
            return state
    }
}

//Actions
export const addImageToBookmarksAC = (imageId: string, imageUrl: string, valueTags: string) => ({
    type: "ADD-IMAGE-TO-BOOKMARKS",
    imageId,
    imageUrl,
    valueTags
} as const)
export const removeImageAC = (imageId: string) => ({type: "REMOVE-IMAGE", imageId} as const)


//Types
type InitialStateType = {
    bookmarksImage: Array<ImageType>
}

type ActionType = ReturnType<typeof addImageToBookmarksAC> | ReturnType<typeof removeImageAC>

export type ImageType = {
    imageId: string
    imageUrl: string
    valueTags: string
}
