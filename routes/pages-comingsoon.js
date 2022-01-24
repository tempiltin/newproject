const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('pages-comingsoon', { title: 'pages-comingsoon' });
});

module.exports = router;
