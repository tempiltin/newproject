const { Router } = require('express');
const router = Router();


router.get('/',  (req, res,)=> {
    res.render('pages-timeline', { 
        title: 'pages-timeline' 
    });
});

module.exports = router;