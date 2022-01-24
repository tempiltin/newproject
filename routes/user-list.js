const { Router } = require('express');
const router = Router();


router.get('/', (req, res,)=> {
    res.render('user-list', { title: 'user-list' });
});

module.exports = router;
