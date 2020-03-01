import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../reducers'
import './CustomNavbar.scss'
import {
    Navbar,
    NavbarBrand,
    Button,
    Modal, 
    ModalBody, 
    ModalHeader,
    FormGroup, 
    FormInput,
    // @ts-ignore
  } from "shards-react";
import { toggleModal, changeUsername } from '../../Actions/actions';


function CustomNavbar({ homeState, onToggleModal, onChangeUsername }: 
        { homeState: { 
            showModal: boolean, 
            username: string 
        }, 
        onToggleModal: (show: boolean) => void,
        onChangeUsername: (text: string) => void }) {
    const { showModal, username } = homeState;
    const [localUsername, setLocalUsername] = useState(homeState.username)

    useEffect(() => {
        console.log('Username updated')
        return () => {
            console.log('navBar unmounting')
        };
    }, [username])

    return (
        <Fragment>
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">To do app</NavbarBrand>
                <div className="float-right-nav">
                    {
                        username !== '' &&
                            <span>Welcome back: {username}</span>
                    }
                    <Button theme="light" onClick={ () => onToggleModal(!showModal) }>
                        { username !== '' ? 'Change username' : 'Set username' }
                    </Button>
                </div>
            </Navbar>
            <Modal open={showModal} toggle={onToggleModal}>
                <ModalHeader>{ username !== '' ? 'Updating username' : 'Setting username' }</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <label htmlFor="username">Enter your new username</label>
                        <FormInput id="username" onChange={(e:any) => setLocalUsername(e.target.value)}/>
                        <div className="modal-button-group">
                            <Button theme="danger" onClick={ () => onToggleModal(!showModal) }>Cancel</Button>
                            <Button theme="warning" onClick={() => {
                                    onChangeUsername(localUsername)
                                    onToggleModal(!showModal) 
                                }
                            }>{ username !== '' ? 'Update username' : 'Set username' }</Button>
                        </div>
                    </FormGroup>
                </ModalBody>
            </Modal>
        </Fragment>
    )
}

const mapStateToProps = (state: RootState) => ({
    homeState: state.home
})

const mapDispatchToProps = (dispatch: any): {
    onToggleModal: (show: boolean) => void,
    onChangeUsername: (text: string) => void
} => {
    return {
        onToggleModal: (show: boolean) => {
            dispatch(toggleModal(show))
        },
        onChangeUsername: (text: string) => {
            dispatch(changeUsername(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavbar)
