import { useState } from "react";
import API from "../services/api";

function EmployeeForm({ fetchEmployees }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/employees/create", form);

    fetchEmployees();

    setForm({
      name: "",
      email: "",
      password: "",
      dob: "",
      role: "",
    });
  };

  return (

    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h4>Add Employee</h4>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  placeholder="Enter name"
                  onChange={handleChange}
                  value={form.name}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={form.email}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={form.password}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  onChange={handleChange}
                  value={form.dob}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Role</label>
                <input
                  className="form-control"
                  name="role"
                  placeholder="Enter role"
                  onChange={handleChange}
                  value={form.role}
                />
              </div>

            </div>

            <button className="btn btn-success">
              Add Employee
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default EmployeeForm;