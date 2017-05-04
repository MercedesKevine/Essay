var express = require('express');
var user = require('../../services/user/user');// Second database connexion with mongoose
var router = express.Router();

router.get('/', user.list);
router.get('/:_id', user.read);
router.post('/', user.create);
router.put('/:_id', user.update);
router.delete('/:_id', user.del);

module.exports = router;
