import assert from 'assert';
import isWeekday from '../isWeekend.js';


describe("this test",function(){
 it("should return true if input is not on weekday",function(){
        assert.equal(isWeekday("Saturday"),false,"its not weekend")
    });
});
