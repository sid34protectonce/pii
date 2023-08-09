"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var data_1 = require("./data");
var user_data = {
    a: "Siddharth Sutar",
    b: ["9657970158", "810564147023"],
    c: {
        d: "keyvalu2@aspa.in"
    },
    e: "Somnath palace, balaji nagar, pune-43",
    f: {
        g: {
            i: "567",
            j: "euu"
        }
    },
    h: 2,
    i: "Windows 11",
    j: "GET"
};
var str = "";
var arr = [];
function detect(data, parent) {
    if (parent === void 0) { parent = ""; }
    for (var key in data) {
        if (typeof data[key] === "object" && !Array.isArray(data[key])) {
            var newParent = parent + (parent !== "" ? "->" : "") + key;
            detect(data[key], newParent);
        }
        else if (Array.isArray(data[key])) {
            for (var _i = 0, _a = data[key]; _i < _a.length; _i++) {
                var value = _a[_i];
                var fullKey = parent + (parent !== "" ? "->" : "") + key;
                arr.push({ "key": fullKey, "value": value });
                console.log("Key: ".concat(fullKey, ", Value: ").concat(value));
            }
        }
        else {
            var fullKey = parent + (parent !== "" ? "->" : "") + key;
            arr.push({ key: fullKey, value: data[key] });
            console.log("Key: ".concat(fullKey, ", Value: ").concat(data[key]));
        }
    }
}
detect(data_1.heartbeat_event, str);
var detected = [];
for (var s = 0; s < arr.length; s++) {
    detected.push({
        key: arr[s]["key"],
        value: arr[s]["value"],
        PII: (0, utils_1.getPII)(arr[s]["value"])
    });
}
for (var r = 0; r < detected.length; r++) {
    console.log(detected[r]);
}
