import assert from 'assert';
import totalPhoneBill from '../totalPhoneBill.js';



describe("this test",function(){
it("should return 'R7.45' as expected",function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"),'R7.45',"must return 'R7.45' as output")
    });
});
