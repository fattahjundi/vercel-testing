const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./api/router')

app.use(router)

app.listen(port, ()=>{ console.log(`listening to port ${port}`); })