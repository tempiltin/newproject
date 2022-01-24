const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('pages-error-500', { 
        title: 'pages-error-500' 
    });
});

module.exports = router;
