const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/',  (req, res,)=> {
    res.render('form-layout', {
         title: 'form-layout'
        
        });
});

module.exports = router;
