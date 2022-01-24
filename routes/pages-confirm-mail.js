const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,) =>{
    res.render('pages-confirm-mail', { 
        title: 'pages-confirm-mail'
     });
});

module.exports = router;