const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/api/info', (req, res) => {
    res.send({'application' : 'news-report', 'version': 1.0});
});

app.post('/api/getback', (req, res) => {
    res.send(...req.body);
});

module.exports.handler = serverless(app);