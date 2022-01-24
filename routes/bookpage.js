var { Router } = require('express');
var router = Router();

router.get('/',  (req, res,)=> {
    res.render('bookpage', {
         title: 'bookpage' 
        
        });
});

module.exports = router;
