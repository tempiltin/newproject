const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('pages-maintenance', { 
        title: 'pages-maintenance'
    
    });
});

module.exports = router;
