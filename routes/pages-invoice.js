const { Router } = require('express');
const router = Router();


router.get('/',  (req, res,) =>{
    res.render('pages-invoice', { 
        title: 'pages-invoice' 
    });
});

module.exports = router;