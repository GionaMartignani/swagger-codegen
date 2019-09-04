/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  var testDataFile = process.env.TEST_DATA_FILE
    ? process.env.TEST_DATA_FILE
    : 'C:\\source\\GitHub\\demonfiddler\\swagger-codegen\\samples\\client\\petstore\\javascript-override-default-config\\test\\test-data.json';
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', 'json-pointer', '../../assert-equals', '../../../js/petstore/index', testDataFile], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('json-pointer'), require('../../assert-equals'), require('../../../js/petstore/index'), require(testDataFile));
  } else {
    // Browser globals (root is window)
    // TODO: load browser test data from file. Maybe via FileSystem (Mozilla, chrome.fileSystem)?
    var testData = null;
    factory(root.expect, root.JsonPointer, root.assertEquals, root.SwaggerPetstore, testData);
  }
}(this, function(expect, pointer, assertEquals, SwaggerPetstore, testData) {
  'use strict';

  var instance;
  var testDataCache;

  function getTestData(pointer) {
    return testDataCache.get('/petstore/UserApi' + pointer);
  }

  before(function() {
    testDataCache = pointer(testData);
  });


  beforeEach(function() {
    instance = new SwaggerPetstore.UserApi();
  });

  describe('petstore', function() {
    describe('UserApi', function() {
      describe('createUser', function() {
        it('should call createUser successfully', function(done) {
          var body = getTestData('/createUser/body');

          instance.createUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
      describe('createUsersWithArrayInput', function() {
        it('should call createUsersWithArrayInput successfully', function(done) {
          var body = getTestData('/createUsersWithArrayInput/body');

          instance.createUsersWithArrayInput(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
      describe('createUsersWithListInput', function() {
        it('should call createUsersWithListInput successfully', function(done) {
          var body = getTestData('/createUsersWithListInput/body');

          instance.createUsersWithListInput(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          var username = getTestData('/deleteUser/username');

          instance.deleteUser(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
      describe('getUserByName', function() {
        it('should call getUserByName successfully', function(done) {
          var username = getTestData('/getUserByName/username');

          instance.getUserByName(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            let expected = getTestData('/getUserByName/response');
            assertEquals(expected, data);

            done();
          });
        });
      });
      describe('loginUser', function() {
        it('should call loginUser successfully', function(done) {
          var username = getTestData('/loginUser/username');
          var password = getTestData('/loginUser/password');

          instance.loginUser(username, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            let expected = getTestData('/loginUser/response');
            assertEquals(expected, data);

            done();
          });
        });
      });
      describe('logoutUser', function() {
        it('should call logoutUser successfully', function(done) {

          instance.logoutUser(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
      describe('updateUser', function() {
        it('should call updateUser successfully', function(done) {
          var username = getTestData('/updateUser/username');
          var body = getTestData('/updateUser/body');

          instance.updateUser(username, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
        });
      });
    });
  });

}));