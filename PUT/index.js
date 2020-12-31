'use strict';

const artistModel = require('./artist');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const { name, numberOfArtworks, location, birthYear, deathYear } = JSON.parse(event.body);

    try {
        const data = await artistModel.update({ id, name, numberOfArtworks, location, birthYear, deathYear });
        
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