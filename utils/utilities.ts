import rules = require('../rules.json');

export let total_count = 0;
let name_count = 0;
let email_count = 0;
let address_count = 0;
let ip_count = 0;
let browser_name_count = 0;
let os_count = 0;
let phone_number_count = 0;
let international_phone_number_count = 0;
let bank_account_number_count = 0;
let credit_card_number_count = 0;
let debit_card_count = 0;
let mac_address_count = 0; 
let imsi_count = 0;
let date_count = 0;
let zip_code_code = 0;
let ssn_count = 0;
let driving_license_count = 0;
let gender_count = 0;
let passport_count = 0;
let financial_count = 0;
let geolocation_count = 0;
let url_count = 0;
let indian_vechical_registration_number_count = 0;
let IMEI_count = 0;
let addhar_card_count = 0;
let pan_card_count = 0;

export function getPII(data: string): string {
  for (let item of rules) {
    let re = RegExp(item.reg)
    if (re.test(data)) {
      total_count++;

      if(item.name === "Name") name_count++;
      else if (item.name === "User Email") email_count++;
      else if (item.name === "IP Address") ip_count++;
      else if (item.name === "Address") address_count++;
      else if (item.name === "Browser Name") browser_name_count++;
      else if (item.name === "OS name") os_count++;
      else if (item.name === "Indian Phone Number") phone_number_count++;
      else if (item.name === "International Phone Number") international_phone_number_count++;
      else if (item.name === "Bank Account Number") bank_account_number_count++;
      else if (
        item.name ===
        "Credit Card Number (VISA, MASTERCARD, AMERICAN EXPRESS, Diners Club, Diners Club, JCB"
      ) credit_card_number_count++;
      else if (item.name === "Debit Card") debit_card_count++;
      else if (item.name === "MAC Address") mac_address_count++;
      else if (item.name === "IMSI") imsi_count++;
      else if (item.name === "Date") date_count++;
      else if (item.name === "Zip code") zip_code_code++;
      else if (item.name === "SSN") ssn_count++;
      else if (item.name === "Driving License") driving_license_count++;
      else if (item.name === "Gender") gender_count++;
      else if (item.name === "Internation Passport number") passport_count++;
      else if (item.name === "financial_count") financial_count++;
      else if (item.name === "Geolocation (Latitude)") geolocation_count++; 
      else if (item.name === "URL") url_count++;
      else if (item.name === "Indian Vechical Registration Number") indian_vechical_registration_number_count++;
      else if (item.name === "IMEI") IMEI_count++;
      else if (item.name === "Addhar Card") addhar_card_count++;
      else if (item.name === "PAN CARD") pan_card_count++;
      
      return item.name;
    }
  }
  return "No PII";
}

export function PrintData(data: { key: string; value: any; PII: string }[]) {
  for (let j = 0; j < data.length; j++) {
    console.log(
      `Key path: ${data[j].key}, Value: ${data[j].value}, Type of pii: ${data[j].PII}`
    );
  }
}

export function getResult(): { name: string; count: number }[] {
  let result: { name: string; count: number }[] = [];

  result = [
    { name: "Name", count: name_count },
    { name: "User Email", count: email_count },
    { name: "IP Address", count: ip_count },
    { name: "Address", count: address_count },
    { name: "Browser Name", count: browser_name_count },
    { name: "OS name", count: os_count },
    { name: "Indian Phone Number", count: phone_number_count },
    {
      name: "International Phone Number",
      count: international_phone_number_count,
    },
    {
      name: "Bank Account Number",
      count: bank_account_number_count,
    },
    {
      name: "Credit Card Number (VISA, MASTERCARD, AMERICAN EXPRESS, Diners Club, Diners Club, JCB",
      count: credit_card_number_count,
    },
    {
      name: "Debit Card",
      count: debit_card_count,
    },
    {
      name: "MAC Address",
      count: mac_address_count,
    },
    {
      name: "IMSI",
      count: imsi_count,
    },
    {
      name: "Date",
      count: date_count,
    },
    {
      name: "Zip code",
      count: zip_code_code,
    },
    {
      name: "SSN",
      count: ssn_count,
    },
    {
      name: "Driving License",
      count: driving_license_count,
    },
    {
      name: "Gender",
      count: gender_count,
    },
    {
      name: "Internation Passport number",
      count: passport_count,
    },
    {
      name: "IMEI",
      count: IMEI_count,
    },
    {
      name: "Addhar Card",
      count: addhar_card_count,
    },
    {
      name: "PAN CARD",
      count: pan_card_count,
    },
  ];

  return result;
}