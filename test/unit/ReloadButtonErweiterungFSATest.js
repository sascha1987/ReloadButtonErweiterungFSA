//const assert = require ('assert')
//const chai = require('chai')
//const ReloadButtonErweiterungFSA = require('../../ReloadButtonErweiterungFSA')
import assert from 'assert'
import chai from 'chai'
import {describe, it, beforeEach, after} from 'mocha'
import {getLastDurationTime} from "../../ReloadButtonErweiterungFSA.js";
import {doReload} from "../../ReloadButtonErweiterungFSA.js";


var get = new getLastDurationTime;
var doReload = new doReload;

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });

});

