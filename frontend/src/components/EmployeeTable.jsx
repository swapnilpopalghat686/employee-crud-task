import { useState } from "react";
import API from "../services/api";

function EmployeeTable({ employees, fetchEmployees }) {

  const [editData, setEditData] = useState(null);

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/delete/${id}`);
    fetchEmployees();
  };

  const handleEdit = (emp) => {
    setEditData(emp);
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await API.put(`/employees/update/${editData._id}`, editData);
    setEditData(null);
    fetchEmployees();
  };

  return (

    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-dark text-white">
          <h4>Employee List</h4>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {employees.length > 0 ? (
                  employees.map((emp) => (
                    <tr key={emp._id}>
                      <td>{emp.name}</td>
                      <td>{emp.email}</td>
                      <td>{new Date(emp.dob).toLocaleDateString()}</td>
                      <td>{emp.role}</td>

                      <td>

                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => handleEdit(emp)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteEmployee(emp._id)}
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No Data Found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

      {/* Edit Form */}

      {editData && (

        <div className="card mt-4">

          <div className="card-header bg-primary text-white">
            Edit Employee
          </div>

          <div className="card-body">

            <div className="row">

              <div className="col-md-6 mb-2">
                <input
                  className="form-control"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  className="form-control"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  value={editData.dob?.slice(0,10)}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-2">
                <input
                  className="form-control"
                  name="role"
                  value={editData.role}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button
              className="btn btn-success mt-2"
              onClick={handleUpdate}
            >
              Update
            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default EmployeeTable;