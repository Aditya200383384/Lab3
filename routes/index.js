var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // test
  res.render('index', { title: 'Foobar' });
});

const persons = [
  {
    route: 'Ram',
    name: 'Ram Bhagvan',
    age: 54,
    cityBorn: 'Ayodhya',
    cityResiding: 'Bharat',
    hobby: 'taking risk.'
  },
  {
    route: 'Chimpu',
    name: 'Chimpu Chameli',
    age: 23,
    cityBorn: 'Mumbai',
    cityResiding: 'MH',
    hobby: 'champi massage'
  },
  {
    route: 'shilla',
    name: 'shilla javani',
    age: 23,
    cityBorn: 'belgoun',
    cityResiding: 'club',
    hobby: ' playing in the golf cart'
  }
];

router.get('/:route', (req, res, next) => {
  // Find the person where their route string equals the route parameter
  const person = persons.find(per => per.route === req.params.route);

  // if no person - render the error page
  if (!person) return next(new Error('Cannot find person'));

  // Res.render - renders a view from our views folder.
  // Pass the person we found in the array above
  return res.render('person', person);
});



module.exports = router;
