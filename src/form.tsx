import Form from "react-bootstrap/Form";
import { Button, Row, Table } from "react-bootstrap";
import { useState } from "react";
function FormGroupExample() {

  
  const [firstNamei , setFirstName] = useState('');
  const [lastNamei , setLastName] = useState('');
  const [agei , setAge] = useState('');
  const [classNamei , setClassName] = useState('');
  const [cityi , setCity] = useState('');
  // const [data, setData]= useState([]);
  const [students, setStudents]=useState(
   [ {
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
  ]);
  console.log("before", students)
// const student1 = {
//   id: 4,
//   firstName: "Ghamees",
//   lastName: "Mohsin",
//   age: "24",
//   class: "2",
//   city: "Lahore",
// };
// const student2 = {
//   id: 5,
//   firstName: "Muhammad",
//   lastName: "Raza",
//   age: "24",
//   class: "3",
//   city: "Islamabad",
// };
//   students.unshift(student1);
//   students.push(student2);
  const handleSubmit=(event: PointerEvent)=>{
      event.preventDefault();
      addStudent();
    console.log("after", students);

    
    setAge("");
    setCity("");
    setClassName("");
    setFirstName("");
    setLastName("");
  
  }

  const addStudent = () => {
      const student = {
        id: (students.length)+1,
        firstName: firstNamei,
        lastName: lastNamei,
        age: agei,
        class: classNamei,
        city: cityi,
      };
    setStudents([...students, student]); // Append new data
}
// const fetchData=(id: string)=>{
//   students.filter(student => student.id==id);
//   console.log(students);
//   // return students;
//   console.log("id", id);  
// }
  // function getData(): any {
  //   const fname = this.form.controls["Name"].value;
  //   const lname = document.getElementById("formGroupLastName");
  //   const age = document.getElementById("formAge");
  //   const className = document.getElementById("formGroupClass");
  //   const city = document.getElementById("formGroupCity");
  //   console.log(fname);
  //   console.log("xsadsxss");
  // }
  
  
  // console.log(students);

  // students.unshift(student1);
  // // console.log(students);

  // students.push(student2);
  // // console.log(students);

  // var userInput=prompt("Please input id number");
  // const input = prompt("What is your name?");
  // console.log("Hello, " + input + "!");

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupFirstName" >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter first name" value={firstNamei}  onChange= {(e)=> setFirstName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" required placeholder="Enter last name" value={lastNamei} onChange={(e)=>{setLastName(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" required placeholder="Enter age" value={agei} onChange={(e)=>{setAge(e.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupClass" >
          <Form.Label>Class</Form.Label>
          <Form.Control type="text" required placeholder="Enter class" value={classNamei} onChange={(e)=>{setClassName(e.target.value)}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"  required placeholder="Enter city" value={cityi} onChange={(e)=>{setCity(e.target.value)}} />
        </Form.Group>
        <Row className="mb-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Row>
      </Form>
      <Table striped bordered hover variant="dark">
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
          {students.map((student) => (
            // <tr key={student.id} onClick={fetchData(student.id)}>
              <tr>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default FormGroupExample;
