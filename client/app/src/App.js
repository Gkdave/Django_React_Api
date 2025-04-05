import React, { useState } from "react";
import EmployeeList from "./components/employeeList";
import EmployeeForm from "./components/employeeForm";

function App() {
  const [selectedEmployee,setSelectedEmployee]=useState(null)
  return (
    <div>
      <h1 className="text-center"> CRUD App with Django & React</h1>
      <EmployeeForm selectedEmployee={selectedEmployee} onFormSubmit={() => setSelectedEmployee(null)} /> 
      <EmployeeList onEdit={setSelectedEmployee} />
    </div>
  
  );
};

export default App;
