import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';


describe("this test", function (){
it("should return 1",function(){
        assert.equal(countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341","CF"),1,"must return 1")
    });
});
