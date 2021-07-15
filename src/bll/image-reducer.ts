
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
const getImageAC = () => ({type: "GET-IMAGE"} as const)

//Thunks


//Types
type InitialStateType = typeof initialState

type ActionType = ReturnType<typeof getImageAC>