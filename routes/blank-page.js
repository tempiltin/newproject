const { Router } = require('express');
const router = Router();

router.get('/', (req, res,) => {
    res.render('blank-page', {
        title: 'blank-page'

    });
});

module.exports = router;
