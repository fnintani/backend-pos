const router = require('express').Router();
const multer = require('multer');
const os = require('os');

const productController = require('./controller');

router.get('/products', productController.getData);
router.post('/products', multer({dest: os.tmpdir()}).single('image'), productController.createData);
router.put('/products/:id', multer({dest: os.tmpdir()}).single('image'), productController.updateData);
router.delete('/products/:id', productController.deleteData);


module.exports = router;