var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
	console.log("Admin")
	session = req.session;
	if (session.email) {
		res.render('admin', { title: 'Express Admin' , email: session.email });
	}
	else
	{
		res.redirect('/');
	}

});

module.exports = router;
