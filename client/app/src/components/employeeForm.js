import React, { useState, useEffect } from 'react';
import { createEmployee, updateEmployee } from '../api';
import { Container, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const EmployeeForm = ({ selectedEmployee, onFormSubmit }) => {
    const [Employee, setEmployee] = useState({
        name:'', email: '', emp_id: '', phone: '', address: ''
    });
    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);
    const handleChange = (e) => {
        setEmployee({ ...Employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (Employee.id) {
            await updateEmployee(Employee.id, Employee);
            toast.success("Data Updated successfuly !!!");
        } else {
            await createEmployee(Employee);
            toast.success("Data Created successfuly !!!");
        }
        onFormSubmit();
        setEmployee({ name: '', email: '', emp_id: '', phone: '', address: '' });
    };
    return (
        <Container fluid>
            <h5><ToastContainer /> </h5>
            <Container>
                <Row>
                    <Col className='py-5'>
                        <h3 className='text-center'>Employee of Company</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <form onSubmit={handleSubmit} >
         <input type="text" name="name" value={Employee.name} onChange={handleChange} placeholder="Name" required />

                                                    
          <input type="email" name="email" value={Employee.email} onChange={handleChange} placeholder='Email' required />
                                                        
        <input type="number" name="emp_id" value={Employee.emp_id} onChange={handleChange} placeholder='Emp_id' required />
                                                    
        <input type="number" name="phone" value={Employee.phone} onChange={handleChange} placeholder='phone number' />
                                                    
        <input type="text" name="address" value={Employee.address} onChange={handleChange} placeholder='Address' required />
        <button className='mb-3' id="btn-crt" type="submit">{Employee.id ? "Update" : "Create"}</button>
                        </form>

                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default EmployeeForm;