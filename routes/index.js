const apiRoutes = require('./api')
const router = require('express').Router()

router.use('/api', apiRoutes)

router.use((req,re) => res.send('Wrong route!'))

module.exports = router