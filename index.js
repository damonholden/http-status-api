import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 3000;
const RESPONSE_CODES = [100, 200, 300, 400, 500];

app.get('/', (req, res) => {
	res.send(`Current supported response codes: ${RESPONSE_CODES.join(', ')}`);
});

for (let responseCode of RESPONSE_CODES) {
	app.get(`/${responseCode}`, (req, res) => {
		res.status(responseCode).send(`Response code: ${responseCode}`);
	});
}
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
