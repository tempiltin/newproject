var { Router } = require('express');
var router = Router();

router.get('/', (req, res,)=> {
    res.render('category', { 
        title: 'Categoriy' 
    });
});

module.exports = router;
