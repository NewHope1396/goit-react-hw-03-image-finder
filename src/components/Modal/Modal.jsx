import React, {Component} from "react"
import { Overlay, ModalWindow } from "./Modal.styled"
import PropTypes from 'prop-types';

export class Modal extends Component  {

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    }

    handleBackdropCklick = (e) => {
        if (e.currentTarget !== e.target) {
            return
        }

        this.props.closeModal();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        const {image} = this.props

        return (
        <Overlay onClick={this.handleBackdropCklick}>
            <ModalWindow>
                <img src={image.largeImageURL} alt={image.tags} />
            </ModalWindow>
        </Overlay>)
    }
}

Modal.propTypes = {
    image: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired
}