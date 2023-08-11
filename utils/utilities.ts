import rules = require('../rules.json');

export let total_count = 0;
export let name_count = 0;
export let email_count = 0;
export let address_count = 0;
export let ip_count = 0;
export let browser_name_count = 0;
export let os_count = 0;
export let phonenumber_count = 0;

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

      if (item.name == "Indian Phone Number") phonenumber_count++;
      
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