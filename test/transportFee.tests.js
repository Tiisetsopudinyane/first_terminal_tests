import assert from 'assert';
import transportFee from '../transportFee.js';


describe("this test", function(){
    it("should return R20",function(){
        assert.equal(transportFee("morning"),"R20","must return R20 if its Morning")
    });
});