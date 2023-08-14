# The Regex PII detection

1. It uses regex to detect pii
2. The regex code is in utils.ts
3. The detection code is in detetion.ts
4. The file data.ts is used for dummy data

## How to run?

```bash
tsc detection.ts --resolveJsonModule

node detection.js
```

## PII regex & It's origin

| PII Name                            | Regex                                                                 | Source                                                                                                 | Is modified |
| ----------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------- |
| Name                                | ^[a-zA-Z\\\s'-]+$                                                     | [LINK](https://hwang.cisdept.cpp.edu/swanew/Text/Common-Regex.htm)                                        | YES         |
| Indian Phone Number                 | ^(?:\\+91\\\\0)?[6789]\\\d{9}$                                        | [LINK](https://stackoverflow.com/questions/3813195/regular-expression-for-indian-mobile-numbers)          | YES         |
| Bank Account Number                 | ^\\d{18}$                                                             | [LINK](https://www.freecodecamp.org/news/what-does-d-mean-in-regex/)                                      | NO          |
| Card Number                         | ^\\d{16}$                                                             | [LINK](https://www.freecodecamp.org/news/what-does-d-mean-in-regex/)                                      | NO          |
| User Email                          | [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$                      | [LINK](https://gist.github.com/cgkio/7268045)                                                             | YES         |
| Address                             | ^(\\d{1,}) [a-zA-Z0-9\\s]+(\\,)? [a-zA-Z]+(\\,)? [A-Z]{2} [0-9]{5,6}$ | [LINK](https://uibakery.io/regex-library/street-address-regex-java)                                       | NO          |
| IP Address                          | ![1691865060070](image/Readme/1691865060070.png)                        | [LINK](https://www.oreilly.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html)      | NO          |
| MAC Address                         | ![1691865123714](image/Readme/1691865123714.png)                        | [LINK](https://stackoverflow.com/questions/4260467/what-is-a-regular-expression-for-a-mac-address)        | NO          |
| IMSI                                | ^[0-9]{5,15}                                                          | [LINK](https://stackoverflow.com/questions/44940763/regex-for-numbers-between-0-9-and-15-digits-as-limit) | NO          |
| PAN CARD                            | [A-Z]{5}[0-9]{4}[A-Z]{1}                                              | LINK                                                                                                   |             |
| Debit Card                          |                                                                       | LINK                                                                                                   |             |
| Browser Name                        |                                                                       | LINK                                                                                                   |             |
| OS name                             |                                                                       | LINK                                                                                                   |             |
| IMSI                                |                                                                       | LINK                                                                                                   |             |
| Date                                |                                                                       | LINK                                                                                                   |             |
| Zip code                            |                                                                       |                                                                                                        |             |
| SSN                                 |                                                                       |                                                                                                        |             |
| International Driving License       |                                                                       |                                                                                                        |             |
| Gender                              |                                                                       |                                                                                                        |             |
| International Passport number       |                                                                       |                                                                                                        |             |
| Financial information               |                                                                       |                                                                                                        |             |
| Geolocation (Latitude)              |                                                                       |                                                                                                        |             |
| Geolocation (Longitude)             |                                                                       |                                                                                                        |             |
| URL                                 |                                                                       |                                                                                                        |             |
| Indian Vechicle Registration Number |                                                                       |                                                                                                        |             |
| IMEI                                |                                                                       |                                                                                                        |             |
| Addhar Card                         |                                                                       |                                                                                                        |             |
|                                     |                                                                       |                                                                                                        |             |
