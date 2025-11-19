const {index, date} = require("../controllers/home.controller")
const router = require("express").Router()

router.get("/", index); // http://localhost:3000/api/example/
router.get("/date", date); // http://localhost:3000/api/example/date

module.exports = router