import { useEffect, useState } from "react";
import API from "../services/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function EmployeePage() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await API.get("/employees/all");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>

      <h1 style={{textAlign:"center"}}>Employee Management</h1>

      <EmployeeForm fetchEmployees={fetchEmployees} />

      <EmployeeTable
        employees={employees}
        fetchEmployees={fetchEmployees}
      />

    </div>
  );
}

export default EmployeePage;