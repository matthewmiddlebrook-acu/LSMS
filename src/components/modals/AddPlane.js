import React from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import * as yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const schema = yup.object({
  name: yup.string().required(),
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  deviceId: yup.string().required(),
  tailNumber: yup.string().required(),
});


/**
 * Modal to add a new plane.
 * 
 * Requires the following:
 * @param {} show - Hook to show the modal
 * @param {} onHide - Hook to hide the modal
 */
function AddPlaneModal(props) {

  const formik = useFormik({
    initialValues: {
      "name": "",
      "model": "",
      "manufacturer": "",
      "deviceId": "",
      "tailNumber": "",
      "status": "active"
    },
    onSubmit: values => {

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'plane': values })
      };

      fetch('https://us-central1-lonestarmeters.cloudfunctions.net/api/planes', requestOptions)
        .then(async response => {
          const data = response;

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            console.log(error);
            toast.error(`Failed to add plane ${values.tailNumber} ${values.name}.`);
            return Promise.reject(data);
          }
        })
        .catch(data => {
          console.error(data);
          toast.error(`Failed to add plane ${values.tailNumber} ${values.name}.`);
        });
      props.onHide();

      toast.success(`Plane ${values.tailNumber} ${values.name} created.`);
    },
    validationSchema: schema
  });

  return (

    <Modal show={props.show} onHide={props.onHide}>
      <Form onSubmit={formik.handleSubmit}>
        <Effect
          formik={formik}
          onSubmissionError={() => toast.error('Please fill out all fields correctly.', { toastId: 'planeFormError' })}
        />
        <Modal.Header closeButton>
          <Modal.Title>Add Plane</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Name</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="name"
                onChange={formik.handleChange}
                isInvalid={formik.errors.name}
                placeholder="Spirit of the world"
              />
              <Form.Control.Feedback type="invalid">Enter a valid name.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Tail Number</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="tailNumber"
                onChange={formik.handleChange}
                isInvalid={formik.errors.tailNumber}
                placeholder="DL200"
              />
              <Form.Control.Feedback type="invalid">Enter a valid tail number.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Model</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="model"
                onChange={formik.handleChange}
                isInvalid={formik.errors.model}
                placeholder="777-200LR"
              />
              <Form.Control.Feedback type="invalid">Enter a valid model.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Manufacturer</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="manufacturer"
                onChange={formik.handleChange}
                isInvalid={formik.errors.manufacturer}
                placeholder="Boeing"
              />
              <Form.Control.Feedback type="invalid">Enter a valid manufacturer.</Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label column sm={3}>Device ID</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="text"
                name="deviceId"
                onChange={formik.handleChange}
                isInvalid={formik.errors.deviceId}
                placeholder="123456"
              />
              <Form.Control.Feedback type="invalid">Enter a valid device ID.</Form.Control.Feedback>
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cancel
        </Button>
          <Button variant="primary" type="submit">
            Add Plane
        </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

function Effect(props) {
  const effect = () => {
    if (props.formik.submitCount > 0 && !props.formik.isValid) {
      props.onSubmissionError();
    }
  };
  React.useEffect(effect, [props.formik.submitCount]);
  return null;
}

export default AddPlaneModal;