const router = require('express').Router();
const deliveryAddressController = require('./controller');

const {police_check} = require('../../middlewares');


router.post('/delivery-addresses',
    police_check('create', 'DeliveryAddress'),
    deliveryAddressController.createData
);

router.put('/delivery-addresses/:id', 
    police_check('update', 'DeliveryAddress'),
    deliveryAddressController.updateData);
router.delete('/delivery-addresses/:id', 
    police_check('delete', 'DeliveryAddress'),
    deliveryAddressController.deleteData
);

router.get('/delivery-addresses',
    police_check('view', 'DeliveryAddress'),
    deliveryAddressController.getData
);

module.exports = router;