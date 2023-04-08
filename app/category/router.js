const router = require('express').Router();
const categoryController = require('./controller');
const { police_check } = require('../../middlewares');

router.get('/categories', categoryController.getData);
router.post('/categories', 
    police_check('create', 'Category'),
    categoryController.createData
);
router.put('/categories/:id',
    police_check('update', 'Category'),
    categoryController.updateData
);
router.delete('/categories/:id', 
    police_check('delete', 'Category'),
    categoryController.deleteData
);


module.exports = router;