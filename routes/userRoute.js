const router = require('express').Router()

router.get('/show', (req, res)=>{
    try {
        res.status(200).send('Selamat Datang, Wawan!')
    } catch(err) {
        res.status(500).send(err)
    }
})

module.exports = router