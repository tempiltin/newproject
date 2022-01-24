const { Router } = require('express');
const router = Router();

router.get('/',  (req, res,)=> {
    res.render('profile-edit', { 
        title: 'profile-edit'
     });
});

module.exports = router;
