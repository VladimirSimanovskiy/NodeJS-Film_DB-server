const dotenv = require('dotenv');
dotenv.config()
const PORT = process.env.PORT || 5000;
const Application = require('./fraemwork/Application');
const filmRouter = require('./routes/film-router');
const genreRouter = require('./routes/genre-router');
const jsonParser = require('./fraemwork/parseJson')
const parseURL = require('./fraemwork/parseURL');
const app = new Application();

app.use(jsonParser);
app.use(parseURL(`http://localhost:${process.env.PORT}`));
app.addRuouter(filmRouter);
app.addRuouter(genreRouter);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));

