import React, { Component } from 'react';

export default class PopUp extends Component{
    render(){
        return(
            <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
                <Modal.Body>
                    <h4>{this.props.header}</h4>
                    <p>{this.props.message}}</p>
                 </Modal.Body>
                <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}