const zeroTo255: string = `(\\d{1,2}|(0|1)\\d{2}|2[0-4]\\d|25[0-5])`;

const regexString = `${zeroTo255}\\.${zeroTo255}\\.${zeroTo255}\\.${zeroTo255}`;

const ipregex = new RegExp(regexString);

let regexList: { name: string; reg: RegExp }[] = [
  { name: "Name", reg: /^[a-zA-Z\s'-]+$/ },
  { name: "Indian Phone Number", reg: /^(?:\+91|0)?[6789]\d{9}$/ },
  { name: "Bank Account Number", reg: /^\d{18}$/ },
  { name: "Card Number", reg: /^\d{16}$/},
  {
    name: "User Email",
    reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    name: "Address",
    reg: /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/,
  },
  { name: "Browser Name", reg: /(chrome|firefox|safari|opera|edge|ie)\b/i },
  { name: "IP Address", reg: ipregex },
  {
    name: "MAC Address",
    reg: /^(?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$|^[0-9A-Fa-f]{12}$/,
  },
  {
    name: "OS name",
    reg: /(windows|mac(?:intosh|os)?|linux|ubuntu|debian|fedora|red hat|centos|android|ios)\b/i,
  },
  {
    name: "IMSI",
    reg: /^[0-9]{5,15}$/,
  },
];

export function getPII(data: string): string {
  for (let item of regexList) {
    if (item.reg.test(data)) {
      return item.name;
    }
  }
  return "No PII";
}
