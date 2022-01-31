const model = require("./user-model")
const checkUserName = async (req, res, next) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      next({ message: "Username and password are missing", status: 404 })
    }
    const exist = await model.findUserByName(req.body.username)
    if (exist) {
      req.user = exist
      next()
    } else {
      next({ message: "user undefiend", status: 404 })
    }
  } catch (error) {
    next(error)
  }
}
module.exports = { checkUserName }
