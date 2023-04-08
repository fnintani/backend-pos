const router = require('express').Router();
const tagController = require('./controller');
const { police_check } = require('../../middlewares');

router.get('/tags', tagController.getData);
router.post('/tags', 
    police_check('create', 'Tag'),
    tagController.createData
);
router.put('/tags/:id', 
    police_check('update', 'Tag'),
    tagController.updateData
);
router.delete('/tags/:id', 
    police_check('delete', 'Tag'),
    tagController.deleteData
);


module.exports = router;