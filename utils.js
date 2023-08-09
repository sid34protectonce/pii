"use strict";
exports.__esModule = true;
exports.getPII = void 0;
var regexList = [
    { name: "User Name", reg: /^[a-zA-Z\s'-]+$/ },
    { name: "Indian Phone Number", reg: /^(?:\+91|0)?[6789]\d{9}$/ },
    { name: "Bank Account Number", reg: /^\d{18}$/ },
    {
        name: "User Email",
        reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    { name: "Address", reg: /\d{1,5}\s\w\.\s(\b\w*\b\s){1,2}\w*\./ },
    { name: "Browser Name", reg: /(chrome|firefox|safari|opera|edge|ie)\b/i },
    { name: "IP Address", reg: /\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b/ },
    {
        name: "MAC Address",
        reg: /^(?:[0-9A-Fa-f]{2}[:-]){5}[0-9A-Fa-f]{2}$|^[0-9A-Fa-f]{12}$/
    },
    {
        name: "OS name",
        reg: /(windows|mac(?:intosh|os)?|linux|ubuntu|debian|fedora|red hat|centos|android|ios)\b/i
    },
    {
        name: "Hardware serials",
        reg: /[A-Za-z0-9]{6,}/
    },
    {
        name: "IMSI",
        reg: /^[0-9]{5,15}$/
    },
];
function getPII(data) {
    for (var _i = 0, regexList_1 = regexList; _i < regexList_1.length; _i++) {
        var item = regexList_1[_i];
        if (item.reg.test(data)) {
            return item.name;
        }
    }
    return "No PII";
}
exports.getPII = getPII;
