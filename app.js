const express = require('express');
const shrinkRay = require('shrink-ray-current');
const http = require('http');
const path = require('path');
const app = express();

app.use(shrinkRay());

app.use(express.static(path.join(__dirname, 'dist', 'resume')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'resume', 'index.html'));
});
const port = process.env.PORT || '3001';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log('Running'));
