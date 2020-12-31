'use strict';

const uuid = require('uuid').v4;
const artistModel = require('./artist');

exports.handler = async (event) => {
    const { name, numberOfArtworks, location, birthYear, deathYear } = JSON.parse(event.body);

    const id = uuid();

    try {
        const record = new artistModel({ id, name, numberOfArtworks, location, birthYear, deathYear });
        const data = await record.save();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            response: error.message
        }
    }
}