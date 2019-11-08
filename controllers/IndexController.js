var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	res.send('Welp. Did it! Hello there World!!!');
});

module.exports = router;
