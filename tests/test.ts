import { expect } from 'chai';
import { detect } from '../detection'
import { user_data } from "../data/detection_data";
import { total_count, getResult } from '../utils/utilities';
import { exit } from 'process';


let results: { name: string; count: number }[] = [];

describe("Testing number of pii", () => {
    try {
        detect(user_data);
        results = getResult();
    }
    catch (error) {
        throw error
    }

    it('total count check', function () {
        expect(total_count).eq(12);
    })

    it('Other counts check', function () {
        for (let res of results) {
            if (res.name === "Name"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "User Email"){

            }
            else if (res.name === "IP Address"){

            }
            else if (res.name === "Address") {

            }
            else if (res.name === "Browser Name"){

            }
            else if (res.name === "OS name"){

            }
            else if (res.name === "Indian Phone Number") {

            }
            else if (res.name === "International Phone Number"){

            }

            else if (res.name === "Bank Account Number") {

            }
            else if (
              res.name ===
              "Credit Card Number (VISA, MASTERCARD, AMERICAN EXPRESS, Diners Club, Diners Club, JCB"
            ){

            }
              
            else if (res.name === "Debit Card") {

            }
            else if (res.name === "MAC Address") {

            }
            else if (res.name === "IMSI") {

            }
            else if (res.name === "Date") {

            }
            else if (res.name === "Zip code"){

            }
            else if (res.name === "SSN"){

            }
            else if (res.name === "Driving License") {

            }
            else if (res.name === "Gender") {

            }
            else if (res.name === "Internation Passport number"){

            }
     
            else if (res.name === "financial_count") {

            }
            else if (res.name === "Geolocation (Latitude)"){

            }

            else if (res.name === "URL"){

            }
            else if (res.name === "Indian Vechical Registration Number"){

            }
              
            else if (res.name === "IMEI") {

            }
            else if (res.name === "Addhar Card") {

            }
            else if (res.name === "PAN CARD") {

            }
        }
    })
});
