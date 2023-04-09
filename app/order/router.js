const router = require('express').Router();
const {police_check} = require('../../middlewares')
const orderController = require('./controller');

router.post(
    './orders', 
    police_check('create', 'Order'),
    orderController.create
);
router.get(
    './orders', 
    police_check('view', 'Order'),
    orderController.getData
);

module.exports = router