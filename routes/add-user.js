const { Router } = require('express');
const router = Router();

router.get('/', (req, res,) => {
    res.render('add-user', {
        title: 'add-user'

    });
});

module.exports = router;
