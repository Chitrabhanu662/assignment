const express = require('express');
const cors = require('cors');
require('./db.js/config')
const User = require("./db.js/User");

const Jwt = require('jsonwebtoken');
const jwtKey = 'e-comm'

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    Jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
            resp.send({ result: "something went wrong please try after some time" })

        }
        resp.send({ result, auth: token })
    })

})

app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    resp.send({ result: "something went wrong please try after some time" })

                }
                resp.send({ user, auth: token })
            })

        } else {
            resp.send({ result: 'No user Found' })
        }
    } else {
        resp.send({ result: 'No user Found' })
    }
})

app.listen(5000);     