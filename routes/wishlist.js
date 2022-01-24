var { Router } = require('express');
var router = Router();

router.get('/',  (req, res,)=> {
    res.render('wishlist', { title: 'wishlist' });
});

module.exports = router;
