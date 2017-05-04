var express = require('express');
var subscriber = require('../../services/subscriber/subscriber');// Second database connexion with mongoose
var router = express.Router();

router.get('/', subscriber.list);
router.get('/:_id', subscriber.read);
router.post('/', subscriber.create);
router.put('/:_id', subscriber.update);
router.delete('/:_id', subscriber.del);

module.exports = router;
