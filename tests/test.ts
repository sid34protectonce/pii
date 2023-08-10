import { expect } from 'chai';
import { detect } from '../detection'
import { heartbeat_event } from "../data/detection_data";
import { total_count, name_count, email_count, address_count, ip_count } from '../utils/utilities';

describe("Testing number of pii", () => {
    try{
        detect(heartbeat_event);
    }
    catch(error){
        throw error
    }

    it('Total count check', function () {
        expect(total_count).eq(12);        
    })

    it('Name count check',function(){
        expect(name_count).eq(6);  
    })

    it('IP count check',function(){
        expect(ip_count).eq(3);
    })

    it('Address count check',function(){
        expect(address_count).eq(0);
    })

    it('Email count check',function(){
        expect(email_count).eq(1);
    })
});
