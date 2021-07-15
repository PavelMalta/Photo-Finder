import { Dispatch } from "redux"
import {imageAPI, ImageQueryParamsType } from "../dal/api"

const initialState = {

}

export const imageReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-IMAGE":
            return {...state}
        default:
            return state
    }
}

//Actions
const getImageAC = () => ({type: "GET-IMAGE", } as const)

//Thunks
export const getCardsTC = (imageQueryParams: ImageQueryParamsType) => (dispatch: Dispatch<ActionType>) => {
    imageAPI.getImage(imageQueryParams)
        .then(res => {
            console.log(res.data)
        })
}

//Types
type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof getImageAC>