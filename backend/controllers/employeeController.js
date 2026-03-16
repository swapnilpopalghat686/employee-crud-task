const Employee = require("../models/Employee");

exports.createEmployee = async (req, res) => {
  const employee = new Employee(req.body);
  const saved = await employee.save();
  res.json(saved);
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};

exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};