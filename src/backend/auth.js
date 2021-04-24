const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

app.use(cors());

app.listen(3001, () => {
    console.log('Authentication service started on port 3001');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const accessTokenSecret = 'youraccesstokensecret';
const refreshTokenSecret = 'yourrefreshtokensecrethere';
let refreshTokens = [];

app.options('*', (req, res) => {
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set('Access-Control-Allow-Methods', ['GET', 'POST']);
    res.send('ok');
});

const users = [
{
    username: 'petr',
    password: 'petr',
}, {
    username: 'anna',
    password: 'password123member',
}
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

        refreshTokens.push(refreshToken);

        res.send(JSON.stringify({
            accessToken,
            refreshToken
        }));
    } else {
        res.status(500).send(`Username or password incorrect`);
    }
});

app.post('/token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
        return res.sendStatus(403);
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

        res.json({
            accessToken
        });
    });
});