const { Router } = require('express');
const router = Router();


router.get('/',  (req, res,)=> {
    res.render('pages-faq', {
         title: 'pages-faq'
         });
});

module.exports = router;
