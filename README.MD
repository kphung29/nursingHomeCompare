Nursing Home Compare
============
**to start:** npm install
**make script executable:** chmod +x index.js, followed by ./index.js, then the command npm link 
**input:** nhc search [input zip code]
**next prompt:** What is the max radius from zip code?  [input miles]
**create json files, already provided** node data-parser.js



ex. nhc search 01608
What radius?  2

<h6>
expected output:  We have found 5 skilled nursing facilities.
[
  {
    "name": "WORCESTER REHABILITATION & HEALTH CARE CENTER",
    "address": "119 PROVIDENCE STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01604",
    "phone": "5088605000",
    "overallRating": "1"
  },
  {
    "name": "WINGATE AT WORCESTER",
    "address": "59 ACTON STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01604",
    "phone": "5087913147",
    "overallRating": "1"
  },
  {
    "name": "ST MARY HEALTH CARE CENTER",
    "address": "39 QUEEN STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01610",
    "phone": "5087534791",
    "overallRating": "5"
  },
  {
    "name": "ST FRANCIS REHABILITATION & NURSING CENTER",
    "address": "101 PLANTATION STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01604",
    "phone": "5087558605",
    "overallRating": "4"
  },
  {
    "name": "BLAIRE HOUSE OF WORCESTER",
    "address": "116 HOUGHTON STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01604",
    "phone": "5087915543",
    "overallRating": "4"
  }
]
</h6>

----



