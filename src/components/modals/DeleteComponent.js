import React from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from 'react-toastify';

/**
 * Modal to delete a component on a plane.
 * 
 * Requires the following:
 * @param {} component - Data of the component
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
function DeleteComponentModal(props) {

  function deleteComponent() {
    const requestOptions = {
      method: 'DELETE'
    };

    fetch(
      `https://us-central1-lonestarmeters.cloudfunctions.net/api/components/${props.component.id}`, requestOptions
    )
      .then(res => JSON.parse(JSON.stringify(res)))
      .then(
        result => {
          props.onHide();
          toast.success(`Component ${props.component.type} ${props.component.model} deleted.`);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log(error);
          props.onHide();
          toast.error(`Failed to delete component ${props.component.type} ${props.component.model}.`);
        }
      );
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete this component?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This action cannot be undone. This will <b>permanently</b> delete the <b>{props.component.type} {props.component.model}</b> component.
        </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={deleteComponent}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteComponentModal;