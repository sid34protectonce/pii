import { expect } from 'chai';
import { detect } from '../detection'
import { user_data } from "../data/detection_data";
import { total_count, name_count, email_count, address_count, ip_count, os_count, browser_name_count } from '../utils/utilities';

describe("Testing number of pii", () => {
    try{
        detect(user_data);
    }
    catch(error){
        throw error
    }

    it('total count check', function () {
        expect(total_count).eq(12);        
    })

    it('name count check',function(){
        expect(name_count).eq(6);  
    })

    it('ip count check',function(){
        expect(ip_count).eq(3);
    })

    it('address count check',function(){
        expect(address_count).eq(0);
    })

    it('email count check',function(){
        expect(email_count).eq(1);
    })

    it("browser name count check", function () {
      expect(os_count).eq(0);
    });

    it("os count check", function () {
      expect(browser_name_count).eq(0);
    });
});
