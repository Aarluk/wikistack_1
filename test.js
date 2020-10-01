const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db } = require('./models');

const test = express()

test.use(express.urlencoded({ extended: false }));
test.use(morgan("dev"));
test.use(express.static(__dirname + "/public"));

test.get('/', (req,res) => {
    res.send(layout(""));
})

const connect = async () => {
    await db.sync();

    console.log("DB has been sync'ed, yay!");

};
// connect();

test.listen(3000, () => {
    console.log('APP listening in port 3000')
});

db.authenticate()
  .then(() => {
    console.log('connected to the database. YAY!');
  })