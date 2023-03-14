const Router = require('../fraemwork/Router');
const router = new Router();
const filmController = require('../controllers/film-controller');

router.post('/film', filmController.createFilm);
router.get('/film', filmController.getFilm);
router.put('/film', filmController.updateFilm);
router.delete('/film', filmController.deleteFilm)

module.exports = router;