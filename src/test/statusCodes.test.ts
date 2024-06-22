import * as assert from 'assert';
const {
  informational,
  successful,
  redirection,
  clientError,
  serverError,
  helperFunctions,
  statusHttpConstants
} = require('../httpConstants');

// Import Mocha's describe and it functions
const { describe, it } = require('mocha');


describe('HTTP status codes:', () => {
  it('There should be 4 informational statuses', () => {
    assert.deepStrictEqual(informational.length, 4);
  });

  it('There should be 10 successful statuses', () => {
    assert.deepStrictEqual(successful.length, 10);
  });

  it('There should be 9 redirection statuses', () => {
    assert.deepStrictEqual(redirection.length, 9);
  });

  it('There should be 28 clientError statuses', () => {
    assert.deepStrictEqual(clientError.length, 28);
  });

  it('There should be 12 serverError statuses', () => {
    assert.deepStrictEqual(serverError.length, 12);
  });

  it('There should be 5 helperFunctions', () => {
    assert.deepStrictEqual(helperFunctions.length, 5);
  });

  it('There should be 68 statusHttpConstants', () => {
    assert.deepStrictEqual(statusHttpConstants.length, 68);
  });
});
