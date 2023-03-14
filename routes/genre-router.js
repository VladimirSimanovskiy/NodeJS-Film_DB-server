const Router = require('../fraemwork/Router');
const genreController = require('../controllers/genre-controller');
const router = new Router();

router.post('/genre', genreController.createGenre);
router.get('/genre', genreController.getGenre);
router.put('/genre', genreController.updateGenre);
router.delete('/genre', genreController.deleteGenre)

module.exports = router;