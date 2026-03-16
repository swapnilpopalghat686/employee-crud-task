const express = require("express");
const router = express.Router();
const controller = require("../controllers/employeeController");

router.post("/create", controller.createEmployee);
router.get("/all", controller.getEmployees);
router.put("/update/:id", controller.updateEmployee);
router.delete("/delete/:id", controller.deleteEmployee);

module.exports = router;