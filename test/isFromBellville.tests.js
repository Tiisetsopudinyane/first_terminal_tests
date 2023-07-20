import assert from 'assert';
import isFromBellville from '../isFromBellville.js';

describe("this test is from Bellville  Reg",function(){
    it("should return true",function(){
        assert.equal(true,isFromBellville("CY"),"should return true");
    });});