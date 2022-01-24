const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('pages-error', { 
        title: 'pages-error' 
    });
});

module.exports = router;
