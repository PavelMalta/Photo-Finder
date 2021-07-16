import { Dispatch } from "redux"
import { AppRootStateType } from "./store"

const initialState = {
 bookmarksImage: []
}

export const bookmarksReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-IMAGE-TO-BOOKMARKS":
            return {...state, bookmarksImage: [...state.bookmarksImage, {imageUrl: action.imageUrl, valueTags: action.valueTags}]}
        default:
            return state
    }
}

//Actions
export const addImageToBookmarksAC = (imageUrl: string, valueTags: string) => ({type: "ADD-IMAGE-TO-BOOKMARKS", imageUrl, valueTags} as const)

//Thunks


//Types
type InitialStateType = {
    bookmarksImage: Array<ImageType>
}

type ActionType = ReturnType<typeof addImageToBookmarksAC>

type ImageType = {
    imageUrl: string
    valueTags: string
}
