const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('pages-recoverpw', { 
        title: 'pages-recoverpw'
     });
});

module.exports = router;