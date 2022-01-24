var { Router } = require('express');
var router = Router();

router.get('/', (req, res,) => {
    res.render('admin-dashboard', {
        title: 'bookpage'

    });
});

module.exports = router;
