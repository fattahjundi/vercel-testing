const router = require('express').Router()
const { getAllUsers, register } = require('../controllers/userController')

router.get('/show', (req, res) => {
    res.send('Selamat datang, wawan!')
})

router.get('/show2', (req, res) => {
    res.send('Selamat datang, imam!')
})
// router.get('/show', getAllUsers)
// router.post('/register', register)

module.exports = router