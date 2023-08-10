import rules = require('../rules.json');

export function getPII(data: string): string {
  for (let item of rules) {
    let re = RegExp(item.reg)
    if (re.test(data)) {
      return item.name;
    }
  }
  return "No PII";
}
