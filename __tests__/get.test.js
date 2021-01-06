'use strict';

const get = require('../GET/index'); 

describe('Artists -> GET', () => {

  it('Can get a list of all artists',()=>{
    var request = {};
    request.pathParameters = {};
    request.pathParameters.id = null;
    request.body = {
      name: "Monet",
      numberOfArtworks: 30,
      location: "Giverny, France",
      birthYear: "1830",
      deathYear: "1902"
    }
    expect(get(request).statusCode).toBe(200);
 });

 it('Can get one artist by id',()=>{});
});