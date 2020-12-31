'use strict';

const artistModel = require('./artist');

exports.handler = async (event) => {
  const id = event.pathParameters.id;
  console.log('__id__', id);
  
  try{
    let data = await artistModel.delete(id,"request");
    return  {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: JSON.stringify(e)
    }
  }
};