const {User} = require('../models/index')

async function getAllUsers(req, res) {
    const user = await User.findAll()
    return user
}

async function register(req, res) {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    const user = await User.create(data)
    return user
}

module.exports = {
    getAllUsers,
    register
}