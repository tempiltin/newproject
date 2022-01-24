var { Router } = require('express');
var router = Router();

router.get('/',  (req, res,) =>{
    res.render('checkout', {
         title: 'checkout' 
        
        });
});

module.exports = router;
