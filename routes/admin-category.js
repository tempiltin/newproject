var { Router } = require('express');
var router = Router();

router.get('/', (req, res,) => {
    res.render('admin-category', {
        title: 'admin-category'

    });
});

module.exports = router;
