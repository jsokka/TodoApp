import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class ConfirmModal extends Component {
  constructor(props) {
    super(props);

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  handleConfirm() {
    this.props.onClose(true);
  }

  handleReject() {
    this.props.onClose(false);
  }

  render() {
    const { show, title, children } = this.props;

    return (
      <Modal show={show} onHide={this.handleReject} backdrop="static" size="sm">
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleReject} variant="secondary">No</Button>
          <Button onClick={this.handleConfirm} variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default ConfirmModal;