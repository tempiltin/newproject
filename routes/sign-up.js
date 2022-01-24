const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/', (req, res,) =>{
    res.render('sign-up', { title: 'sign-up' });
});

module.exports = router;