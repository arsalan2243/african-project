const express = require("express")
const router = express.Router()
const { getAllUsers, insertUser } = require("./user-model.js")
const { checkUserName } = require("./user-middleware")
const tokenMaker = require("../token-maker")
const bcrypt = require("bcryptjs")

router.get("/", async (req, res) => {
  console.log("kio")
  res.json(await getAllUsers())
})

router.post("/", async (req, res) => {
  res.status(201).json(await insertUser(req.body))
})

router.post("/register", async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 4)
    req.body.password = hash
    res.status(201).json(await insertUser(req.body))
  } catch (error) {
    next(error)
  }
})

router.post("/login", checkUserName, async (req, res, next) => {
  const userExist = req.user
  if (userExist && bcrypt.compareSync(req.body.password, userExist.password)) {
    const token = tokenMaker(req.user)
    res
      .status(201)
      .json({ message: `welocme ${req.user.username}`, token: token })
  } else {
    next({ message: "invalid credinetials", status: 401 })
  }
})

module.exports = router
