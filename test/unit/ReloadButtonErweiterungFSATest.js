var ReloadButtonErweiterungFSAFunc = require('../../ReloadButtonErweiterungFSAFunc')

const chai = require('chai');
const should = chai.should()

describe('checkIfLocalStorageisEmtpy', function() {
    describe('#checkIfLocalStorageisEmtpy returns a object', function() {
        it('it should return an object', function() {

            ReloadButtonErweiterungFSAFunc.checkIfLocalStorageisEmtpy().should.be.an('object');

        });
    });
});