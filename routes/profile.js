const { Router } = require('express');
const router = Router();


router.get('/',  (req, res,)=> {
    res.render('profile', {
         title: 'profile'
         });
});

module.exports = router;
