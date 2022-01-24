const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/',  (req, res,)=> {
    res.render('sign-in', { title: 'sign-in' });
});

module.exports = router;