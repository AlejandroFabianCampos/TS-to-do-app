import { 
    TOGGLE_MODAL,
    CHANGE_USERNAME,
    actionCreatorTsTypes,

    } from './actionTypes'

export function toggleModal(show: boolean): actionCreatorTsTypes {
    return { type: TOGGLE_MODAL, show}
}

export function changeUsername(username: string): actionCreatorTsTypes {
    return { type: CHANGE_USERNAME, username: username }
}