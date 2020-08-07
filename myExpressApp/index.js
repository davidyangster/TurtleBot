require('dotenv').config({ path: 'variables.env' });
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* For Facebook Validation */
const verifyWebhook = require('./verify-webhook');

app.get('/', verifyWebhook);



/* Handling all messenges */
const messageWebHook = require('./message-webhook');
app.post('/', messageWebHook);

app.listen(3000, () => console.log('Express server is listening on port 3000'));