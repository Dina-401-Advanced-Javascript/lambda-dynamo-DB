'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    'name': String,
    'numberOfArtworks': Number,
    'location': String,
    'birthYear': String,
    'deathYear': {type:String, default:"N/A"}
});

module.exports = dynamoose.model('artist', schema);