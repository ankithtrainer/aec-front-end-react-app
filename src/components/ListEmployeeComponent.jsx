import { useState } from "react"
import React , {useEffect} from 'react'
import { listEmployees } from "../services/EmployeeServices"
import { useNavigate} from "react-router-dom"


const ListEmployeeComponent = () => {

   const [employees,setEmployees]  =  useState([]);
   const navigator = useNavigate();

   useEffect( () => {

      listEmployees().then((response) => {
        setEmployees(response.data);

      }).catch(error =>{
        console.error(error);
      })

   },[])

   /* const dummyData = [
        {
            "id" :100,
            "name":"Alok",
            "email": "alok@gmail.com",
           "city": "Kolkata"
        },
        {
            "id" :200,
            "name":"Alok",
            "email": "alok@gmail.com",
            "city": "Kolkata"
        },
        {
            "id" :300,
            "name":"Alok",
            "email": "alok@gmail.com",
            "city": "Kolkata"
        }

    ]
        */
  function addNewEmployee(){
    navigator('/add-employee');
  }

  function updateEmployee(){
    navigator(`/edit-employee/${id}`)
  }

  return (
    <div className='container'>
        <button type="button" className="btn btn-primary" onClick={addNewEmployee}>Add Employee</button>
       <h3> List Of Empoyees</h3>
    <table className='table'>
        <thead>

            <tr>
                <th>Emp Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
                <th> Actions</th>
            </tr>
        </thead>

        <tbody>
            {
               /* dummyData.map(employee =>
                   <tr key={employee.id}>
                       <td>{employee.email}</td>
                       <td>{employee.city}</td>
                       <td>{employee.name}</td>

                     
                   </tr>


                )*/
               
                   employees.map(employee =>
                   <tr key={employee.id}>
                       <td>{employee.empId}</td>
                       <td>{employee.empname}</td>
                       <td>{employee.empemail}</td>
                       <td>{employee.empcity}</td>
                       <td>{employee.empephone}</td>
                       <td>
                        <button className="btn btn-info" onClick="{() =>updateEmployee(employee.id)}">Update</button>
                       </td>
                     
                   </tr>)
            }
        </tbody>
    </table>


    </div>
  )
}

export default ListEmployeeComponent