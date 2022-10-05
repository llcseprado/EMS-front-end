const express = require("express");
const app = express();
const router = express.Router();
const userController = require("../controllers/userController");

// //Create, find, update, delete
// router.get("/", userController.view);

//get static files (css)
app.use(express.static("public"));

//Router
router.get("/", (req, res) => {
  res.render("home", {
    title: "EMS Homepage",
  });
});

router.get("/dtr", (req, res) => {
  res.render("dtr", {
    title: "Daily Time Record",
    style: "dtr.css",
  });
});

router.get("/employees", (req, res) => {
  res.render("employees-admin", {
    title: "Employee Records",
  });
});

module.exports = router;
