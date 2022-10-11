const express = require("express");
const router = express.Router();
const apiUsersController = require("../../Controllers/api/apiUsersController");

router.get("/apiUsers", apiUsersController.list);
router.get("/apiUsers/:id", apiUsersController.detail);

module.exports = router;