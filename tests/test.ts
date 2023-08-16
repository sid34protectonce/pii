import { expect } from 'chai';
import { detect } from '../detection'
import { user_data } from "../data/detection_data";
import { event_data } from '../data/actual_data';
import { total_count, getResult } from '../utils/utilities';
import { exit } from 'process';

describe("Testing number of pii", () => {
    let results: { name: string; count: number }[];
    try {
        detect(event_data);
        results = getResult();
        console.log(results);
    }
    catch (error) {
        throw error
    }

    it('total count check', function () {
        expect(total_count).eq(8);
    })

    it('Other counts check', function () {
        for (let res of results) {
            if (res.name === "Name"){
                if(res.count === 3){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "User Email"){
                if(res.count === 1){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "IP Address"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Address") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Browser Name"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "OS name"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Indian Phone Number") {
                if(res.count === 1){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "International Phone Number"){
                if(res.count === 1){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }

            else if (res.name === "Bank Account Number") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (
              res.name ===
              "Credit Card Number"
            ){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
              
            else if (res.name === "Debit Card") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "MAC Address") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "IMSI") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Date") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Zip code"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "SSN"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Driving License") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Gender") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Internation Passport number"){
                if(res.count === 1){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
     
            else if (res.name === "financial_count") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Geolocation (Latitude)"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }

            else if (res.name === "URL"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Indian Vehical Registration Number"){
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
              
            else if (res.name === "IMEI") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "Addhar Card") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
            else if (res.name === "PAN CARD") {
                if(res.count === 0){
                    console.log(`Passed ${res.name} count test`);
                }
                else{
                    console.log(`Failed ${res.name} count test`);
                    exit(1);
                }
            }
        }
    })
});
