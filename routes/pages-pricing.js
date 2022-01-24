const { Router } = require('express');
const router = Router();


router.get('/',  (req, res,)=> {
    res.render('pages-pricing', { 
        title: 'pages-pricing' 
    
    });
});

module.exports = router;
