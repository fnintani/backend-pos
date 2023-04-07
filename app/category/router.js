const router = require('express').Router();
const categoryController = require('./controller');

router.get('/categories', categoryController.getData);
router.post('/categories', categoryController.createData);
router.put('/categories/:id', categoryController.updateData);
router.delete('/categories/:id', categoryController.deleteData);


module.exports = router;