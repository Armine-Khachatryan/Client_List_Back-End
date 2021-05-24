const router = require('express').Router();
const {saveProvider, findAllProviders, updateProvider, deleteProvider} = require('../controllers/provider-ctrl');

router.get('/', findAllProviders);
router.post('/', saveProvider);
router.put('/:id', updateProvider);
router.delete('/:id', deleteProvider);

module.exports = router;