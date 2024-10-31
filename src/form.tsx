import Form from 'react-bootstrap/Form';
import { Button,Row,Table } from "react-bootstrap";
import './students.js';
function FormGroupExample() {

  const students = [
    {
      id: 1, 
      firstName: "Ali",
      lastName: "Ashraf",
      age: "24",
      class: "2",
      city: "Lahore",
    },
    {
      id: 2,
      firstName: "Ahmad",
      lastName: "Sattar",
      age: "24",
      class: "3",
      city: "Lahore",
    },
    {
      id: 3,
      firstName: "Arbaz",
      lastName: "Sheraz",
      age: "23",
      class: "3",
      city: "Islamabad",
    },
  ];
  const student1 = {
    id: 4,
    firstName: "Ghamees",
    lastName: "Mohsin",
    age: "24",
    class: "2",
    city: "Lahore",
  };
  const student2 = {
    id:5,
    firstName: "Muhammad",
    lastName: "Raza",
    age: "24",
    class: "3",
    city: "Islamabad",
  };
  // console.log(students);
  
  students.unshift(student1);
  // console.log(students);
  
  students.push(student2);
  console.log(students);
  
  // var userInput=prompt("Please input id number");
  // const input = prompt("What is your name?");
  // console.log("Hello, " + input + "!");
  
  
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupClass">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter class" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" />
      </Form.Group>
      <Row className="mb-2">
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Row>
    </Form>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Class</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
          {
            students.sort().map((student)=>
            <tr>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.city}</td>
            </tr>)
          }
    </tbody>
  </Table>
  </>
  );
}

export default FormGroupExample;