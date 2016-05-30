var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	session = req.session;
	
	console.log(session);

	if (session.email) {
		res.redirect('admin');
	}else
	{
  	    res.render('login', { 
            title: 'Form Validation Example',
            message: '',
            errors: {}
        });

	}

});

router.post('/', function (req, res) {
    req.assert('email', 'A valid email is required').isEmail();  //Validate email

    var errors = req.validationErrors();
    if( !errors){
    console.log(req.body);
    req.session.email = req.body.email;
    res.redirect('admin');
	}
    else {  
        res.render('login', { 
            title: 'Express Login',
            message: '',
            errors: errors
        });
    }
});


module.exports = router;
