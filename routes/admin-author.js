const { Router } = require('express');
const router = Router();

router.get('/', (req, res,) => {
    res.render('admin-author', {
        title: 'admin-author'

    });
});

module.exports = router;
