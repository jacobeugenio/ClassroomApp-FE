import React, { useState } from 'react';
import Header from '../../layout/Header';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const Students = () => {
  const [students, setSudents] = useState([]);

  return (
    // fname: "Richard", lname: "Betalmos", username: "IchadB", contact: 09925235991, gender: "Male", age: 30, password: "1234ichad"},
    <>
      <Header />
      <Container className='my-4'>
        <h3>Students List</h3>
        <hr />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Age</th>
              {/* <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))} */}
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr> */}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Students