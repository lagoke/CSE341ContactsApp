const router = require('express').Router()

router.use('/', require('./swagger.js'));

router.get('/', (req, res) => {
    res.send("Hello world");
})

router.use('/users', require('./users'));

module.exports = router; 