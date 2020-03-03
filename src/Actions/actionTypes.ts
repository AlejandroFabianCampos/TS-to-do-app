
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const CHANGE_USERNAME = 'CHANGE_USERNAME'

interface toggleModalAction {
    type: typeof TOGGLE_MODAL,
    show: boolean
}

interface changeUsernameAction {
    type: typeof CHANGE_USERNAME,
    username: string
}

export type actionCreatorTsTypes = changeUsernameAction | toggleModalAction; // In the future use | to add more possible interfaces for action creators