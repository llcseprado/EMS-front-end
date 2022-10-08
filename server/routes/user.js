const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/userController");

// //Create, find, update, delete
// router.get("/", userController.view);

//get static files (css)
app.use(express.static("public"));

//Router (pasali sa title hehe)
router.get("/", (req, res) => {
  res.render("home", {
    title: "EMS Homepage",
  });
});

router.get("/dtr", (req, res) => {
  res.render("dtr-emp", {
    title: "Daily Time Record",
  });
});

router.get("/employees", (req, res) => {
  res.render("employees-admin", {
    title: "Employee Records",
  });
});

router.get("/add-employee", (req, res) => {
  res.render("add-emp", {
    title: "Add Employee Profile",
  });
});

router.get("/edit-employee", (req, res) => {
  res.render("edit-emp", {
    title: "Edit Employee Profile",
  });
});

module.exports = router;
