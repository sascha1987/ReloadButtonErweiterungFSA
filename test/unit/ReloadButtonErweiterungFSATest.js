var ReloadButtonErweiterungFSAFunc = require('../../ReloadButtonErweiterungFSAFunc')

const chai = require('chai');
const should = chai.should();
const assert = require('assert');
const expect = require('chai').expect


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

            ReloadButtonErweiterungFSAFunc.getLastDurationTime().should.be.equal(300)
        });
    });
});

describe('checkIfgetLastDurationTime', function() {
    describe('#checkIfLastDurationTime returns a numbe ', function() {
        it('it should return a number', function() {

            expect(ReloadButtonErweiterungFSAFunc.getLastDurationTime().should.to.be.an('number'))
        });
    });
});
