const { Router } = require('express');
const router = Router();

router.get('/', (req, res,) => {
    res.render('admin-books', {
        title: 'admin-books'

    });
});

module.exports = router;
