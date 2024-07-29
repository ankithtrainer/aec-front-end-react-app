import axios from "axios";
const REST_API_BASE_URL = "http://localhost:9801/api/employees";

const REST_API_POST_URL = "http://localhost:9801/api/storedata";

const REST_API_GET_EMP_BY_EMP_ID = "http://localhost:9801/api/employee";

/*const REST_API_UPDATE_URL = "http://localhost:9801/api/update-employee"; */

export const listEmployees  = () =>{
    return axios.get(REST_API_BASE_URL);
}

// export const listOfEmployees  = () => axios.get(REST_API_BASE_URL);

export const createEmployee  = (employee) => axios.post(REST_API_POST_URL,employee);

/*export const getEmployee  = (employeeId) => axios.post(REST_API_GET_EMP_BY_EMP_ID+'/' +employeeId); */



