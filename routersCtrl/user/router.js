var express = require('express');
var user = require('../../services/user/user');// Second database connexion with mongoose
var router = express.Router();

router.get('/', user.list);
router.get('/:id', user.read);
router.post('/', user.create);
router.put('/:id', user.update);
router.delete('/:id', user.del);

module.exports = router;
