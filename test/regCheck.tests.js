import assert from 'assert';
import regCheck from '../regCheck.js';


describe("this test",function(){
    it("it should return true output",function(){
        assert.equal(regCheck("DC 55 YU GP","GP"),true,"should return true");
    });
});
