var ReloadButtonErweiterungFSAFunc = require('../../ReloadButtonErweiterungFSAFunc')

const chai = require('chai');
const should = chai.should()

describe('checkIfLocalStorageisEmtpy', function() {
    describe('#checkIfLocalStorageisEmtpy returns an object', function() {
        it('it should return an object', function() {

            ReloadButtonErweiterungFSAFunc.checkIfLocalStorageisEmtpy().should.be.an('object');
        });
    });
});

describe('getLastDurationTime', function() {
    describe('#getLastDurationTime returns value', function() {
        it('it should return a value of 60', function() {

            ReloadButtonErweiterungFSAFunc.getLastDurationTime().should.be.equal(60)
        });
    });
});

describe('setUpProgressBar', function() {
    describe('#setUpProgressBar returns value', function() {
        it('it should return a number', function() {

            return ReloadButtonErweiterungFSAFunc.setUpProgressBar(setValue)
        });
    });
});