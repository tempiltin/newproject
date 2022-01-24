const { Router } = require('express');
const router = Router();

/* GET home page. */
router.get('/',  (req, res,)=> {
    res.render('form-validation', {
         title: 'form-validation' 
        });
});

module.exports = router;
