
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent'
import Header from './components/Header'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
              <Route path="/" element={<ListEmployeeComponent/>} />   
              <Route path="/employees" element={<ListEmployeeComponent/>} />  
              <Route path="/add-employee" element={<EmployeeComponent/>} /> 
              <Route path="/edit-employee/:id" element={<EmployeeComponent/>} />  
        </Routes>
        <FooterComponent/>
      </Router>
    </>
  )
}

export default App
