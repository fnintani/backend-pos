const router = require('express').Router();
const tagController = require('./controller');

router.get('/tags', tagController.getData);
router.post('/tags', tagController.createData);
router.put('/tags/:id', tagController.updateData);
router.delete('/tags/:id', tagController.deleteData);


module.exports = router;