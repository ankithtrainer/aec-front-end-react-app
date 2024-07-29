import React from "react";
import { useState } from "react"
import { createEmployee } from "../services/EmployeeServices";
import { useNavigate ,useParams} from "react-router-dom";

const EmployeeComponent = () => {
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [empmail, setEmpEmail] = useState('');
  const [empPhone, setEmpPhone] = useState('');
  const [empAddress, setEmpAddress] = useState('');

  const {id} = useParams();

  const navigator = useNavigate();

  /*

  function handleEmpId(e){
    setEmpId(e.target.value);
  }
  function handleEmpName(e){
    setEmpName(e.target.value);
  }

  function handleEmpEmail(e){
    setEmpEmail(e.target.value);
  }
  function handleEmpPhone(e){
    setEmpPhone(e.target.value);
  }


  function handleEmpAddress(e){
    setEmpAddress(e.target.value);
  }
  */
  function saveEmployee(e){
     e.preventDefault();
     const employee = {empId,empName,empAddress,empPhone,empmail}
     console.log(employee);

     createEmployee(employee).then((response) =>{
        console.log(response.data);
        navigator('/employees');
    })
  }
  
  function pageTitle(){
    if(id){
        return <h2 className="text-center" >Update Employee</h2>
    }else{
        return <h2 className="text-center" >Add Employee</h2>
    }
  }
  return (
    <div>
    
      <div className="container">
        <div className="row">
          <div className="card">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">Emp Id</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    name="empId"
                    value={empId}
                    className="form-control"
                    onChange={(e)=>  setEmpId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Name"
                    name="empName"
                    value={empName}
                    className="form-control"
                    onChange={(e)=>  setEmpName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Email</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Email"
                    name="empmail"
                    value={empmail}
                    className="form-control"
                    onChange={(e) =>setEmpEmail(e.target.value)  }
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Phone"
                    name="empPhone"
                    value={empPhone}
                    className="form-control"
                    onChange={(e) => setEmpPhone(e.target.value) }
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">Emp Address</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Id"
                    name="empAddress"
                    value={empAddress}
                    className="form-control"
                    onChange={(e) => setEmpAddress(e.target.value)}
                  ></input>
                </div>

                <button className="btn btn-success" onClick={saveEmployee}>Submit</button>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
