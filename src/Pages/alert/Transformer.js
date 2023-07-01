import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { getCategory } from '../../redux/slices/CategorySlice';
const Transformer = ({hide, show}) => {
  const [inputData, setInputData]= useState({
    name:"",
    role:"",
    location:"",
    company:"",
    education:"",
    mobile:"",
    email:"",
    check:false,
  })

  const dispatch = useDispatch();

  const{name, role, location, company, education, mobile, email, check}= inputData;


  const handleInput=(e)=>{
    const{name, value}= e.target;
    setInputData({...inputData, [name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(getCategory(inputData));
  }
  


  return (
    <Modal show={show} onHide={hide} size={'lg'}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmit}>
 <div className="row">
    <Form.Group className="mb-3 col-md-6" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" value={name} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Enter Role" name="role" value={role} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter Location" name="location" value={location} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Enter Company" name="company" value={company} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3 col-md-6" controlId="formBasicEducation">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" placeholder="Education" name="education" value={education} onChange={handleInput} />
      </Form.Group>
      
      <Form.Group className="mb-3 col-md-6" controlId="formBasicMobile">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile" name="mobile" value={mobile} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleInput} />
        
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" name="check" value={check} onChange={handleInput} />
      </Form.Group>
</div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={hide}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>
  )
}

export default Transformer