const router = require('express').Router();
const {saveClient, findAll, updateClient, deleteClient} = require('../controllers/client-ctrl');

router.get('/', findAll);
router.post('/', saveClient);
router.put('/:id', updateClient);
router.delete('/:id', deleteClient)

module.exports = router;