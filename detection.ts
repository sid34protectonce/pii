import { getPII } from "./utils/utilities";
import { user_data } from "./data/detection_data";
import 'dotenv/config';
import { event_data } from './data/actual_data';

let str: string = "";
let arr: { key: string; value: any }[] = [];

export function detect(data: any, parent: string = "") {
  for (let key in data) {
    if (typeof data[key] === "object" && !Array.isArray(data[key])) {
      let newParent = parent + (parent !== "" ? "->" : "") + key;
      detect(data[key], newParent);
    } else if (Array.isArray(data[key])) {
      for (let value of data[key]) {
        let fullKey = parent + (parent !== "" ? "->" : "") + key;
        arr.push({"key": fullKey, "value": value});
      }
    } else {
      let fullKey = parent + (parent !== "" ? "->" : "") + key;
      arr.push({ key: fullKey, value: data[key] });
    }
  }
}

detect(event_data, str);

export let detected: { key: string; value: any; PII: string }[] = [];

for(let s = 0; s < arr.length; s++){
  detected.push({
    key: arr[s]["key"],
    value: arr[s]["value"],
    PII: getPII(arr[s]["value"]),
  });
}


for(let j = 0; j < detected.length; j++){
  console.log(`Key path: ${detected[j].key}, Value: ${detected[j].value}, Type of pii: ${detected[j].PII}`);
}