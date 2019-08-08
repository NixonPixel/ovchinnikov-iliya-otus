const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const { mongoURI } = require('./config/config');

const schema = require('./schema/schema')

mongoose
    .connect(mongoURI)
    .then(() => console.log('Connection to the database was successful'))
    .catch(error => console.log(error));

const app = express()

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}))

app.listen(3000)
