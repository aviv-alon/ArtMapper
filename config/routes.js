const router = require('express').Router();
const paintingsController = require('../controllers/paintings');
const authController = require('../controllers/auth');
//const artistController = require('../controllers/artist');
const secureRoute = require('../lib/secureRoute');

router.route('/paintings')
  .get(paintingsController.index)
  .post(secureRoute, paintingsController.create);

router.route('/paintings/:id')
  .get(paintingsController.show)
  .put(secureRoute, paintingsController.update)
  .delete(secureRoute, paintingsController.delete);

router.post('/paintings/:id/comments', secureRoute, paintingsController.createComment);
router.delete('/paintings/:id/comments/:commentId', secureRoute, paintingsController.deleteComment);

router.post('/register', authController.register);
router.post('/login', authController.login);

router.route('/*')
  .all((req, res) => res.sendStatus(404));

module.exports = router;