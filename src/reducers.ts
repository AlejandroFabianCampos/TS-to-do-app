import { combineReducers } from 'redux'
import { TOGGLE_MODAL, CHANGE_USERNAME, actionCreatorTsTypes } from './Actions/actionTypes'

type homeReducerState = {
    showModal: boolean,
    username: string
}

const initialState: homeReducerState = {
    showModal: false,
    username: ''
}

function homeReducer(state:homeReducerState = initialState, action: any):homeReducerState {
    switch(action.type) {
        case TOGGLE_MODAL:
            return { ...state, showModal: action.show }
        case CHANGE_USERNAME:
            return { ...state, username: action.username }
        default: 
            return state
    }
}

export const rootReducer = combineReducers({
    home: homeReducer,
})

export type RootState = ReturnType<typeof rootReducer>