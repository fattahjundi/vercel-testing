const router = require('express').Router()
const userRoute = require('../routes/userRoute')

router.get('/', (req, res)=>{
    res.send('Ini halaman index')
})
router.use('/user', userRoute)

module.exports = router