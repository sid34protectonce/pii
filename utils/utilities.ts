import rules = require('../rules.json');

export let total_count = 0;
export let name_count = 0;
export let email_count = 0;
export let address_count = 0;
export let ip_count = 0;
export let browser_name_count = 0;
export let os_count = 0;
export let phone_number_count = 0;
let international_phone_number_count = 0;
let bank_account_number_count = 0;
let credit_card_number_count = 0;
let debit_card_count = 0;
let mac_address_count = 0; 
let imsi_count = 0;
let date_count = 0;
let zip_code_code = 0;
let ssn_count = 0;
let driving_license_coun = 0;
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

      if(item.name == "Name") name_count++;

      if (item.name == "User Email") email_count++;
      
      if (item.name == "IP Address") ip_count++;

      if (item.name == "Address") address_count++;

      if (item.name == "Browser Name") browser_name_count++;

      if (item.name == "OS name") os_count++;

      if (item.name == "Indian Phone Number") phone_number_count++;
      
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