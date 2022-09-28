import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080";

class EmployeeService {

    getEmployees(API_URL){
        return axios.get(EMPLOYEE_API_BASE_URL + API_URL);
    }

    createEmployee(API_URL){
        return axios.post(EMPLOYEE_API_BASE_URL,'/'+ API_URL);
    }

    getEmployeeById(API_URL_ID){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + API_URL_ID);
    }

    updateEmployee(API_URL_BYID){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + API_URL_BYID);
    }

    deleteEmployee(API_URL_BYID){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + API_URL_BYID);
    }
}

export default new EmployeeService()