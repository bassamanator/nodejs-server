let connectionCounter = 0;
const PORT = 5011;
const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
	next();
});

app.get('/', (req, res) => {
	const msg = `Connected[${++connectionCounter}], URL: ${req.url}, Method: ${req.method}`;
	console.log(msg);
	res.status(200).json({ message: msg });
});

app.post('/', (req, res) => {});

app.delete('/', (req, res) => {});

app.patch('/', (req, res) => {});

app.listen(PORT, () => console.log(`Server 🔥🔥🔥 up on ${PORT}`));
