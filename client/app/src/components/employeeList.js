import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../api';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';


const EmployeeList = ({ onEdit }) => {
    const [Employees, setEmployees] = useState([]);
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };
    const handleDelete = async (id) => {
        await deleteEmployee(id);
        toast.success("Data deleted successfuly !!!");
        fetchEmployees();
    };
    return (

        <Container fluid>
            <Container>
            <ToastContainer />

            </Container>
            <Row>
                            <h2>Employee List</h2>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Emp_id</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {Employees.map((Employee) => (
                                <tr key={Employee.id}>
                                    <td>{Employee.id}</td>
                                    <td>{Employee.name}</td>
                                    <td>{Employee.email}</td>
                                    <td>{Employee.emp_id}</td>
                                    <td>{Employee.phone}</td>
                                    <td>{Employee.address}</td>
                                    
                                    <td>
                                        <button id="edit" onClick={() => onEdit(Employee)}>Edit</button>
                                        <button id="btn-del" onClick={() => handleDelete(Employee.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>


                </Col>
            </Row>
        </Container>

    );
};

export default EmployeeList;

