
export const TOGGLE_MODAL: string = 'TOGGLE_MODAL'
export const CHANGE_USERNAME: string = 'CHANGE_USERNAME'

interface toggleModalAction {
    type: string,
    show: boolean
}

interface changeUsernameAction {
    type: string,
    username: string
}

export type actionCreatorTsTypes = changeUsernameAction | toggleModalAction; // In the future use | to add more possible interfaces for action creators