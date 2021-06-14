const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const apiRouter = require('./routes/api');

app.use(express.json());

app.use('/api', apiRouter);

// app.use('/', express.static(path.join(__dirname, '../build')));

app.use('*', (req, res) => {
	return res.status(404).send('404 invalid route');
});

app.use((err, req, res, next) => {
	const defaultError = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: { err: 'An error occured' },
	};
	const errorObj = { ...defaultError, err };

	return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
