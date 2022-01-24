var { Router } = require('express');
var router = Router();

router.get('/',  (req, res,) =>{
    res.render('bookPDF', { 
        title: 'bookPDF' 
    });
});

module.exports = router;
