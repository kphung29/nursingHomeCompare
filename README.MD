Nursing Home Compare
============
**to start:** npm install
**make script executable:** chmod +x index.js, followed by ./index.js, then the command npm link 
**input:** nhc search [input zip code]
**next prompt:** What is the max radius from zip code?  [input miles]
**create json files, already provided** node data-parser.js



ex. nhc search 01608
What radius?  5

expected output:  We have found 21 skilled nursing facilities.
[
  {
    "name": "HERMITAGE HEALTHCARE (THE)",
    "address": "383 MILL STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01602",
    "phone": "5087918131",
    "overallRating": "2"
  },
  {
    "name": "KNOLLWOOD NURSING CENTER",
    "address": "87 BRIARWOOD CIRCLE",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01606",
    "phone": "5088536910",
    "overallRating": "5"
  },
  {
    "name": "JEWISH HEALTHCARE CENTER",
    "address": "629 SALISBURY STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01609",
    "phone": "5087988653",
    "overallRating": "5"
  },
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
    "name": "LUTHERAN REHABILITATION & SKILLED CARE CENTER",
    "address": "26 HARVARD STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01609",
    "phone": "5087548877",
    "overallRating": "4"
  },
  {
    "name": "CHRISTOPHER HOUSE OF WORCESTER",
    "address": "10 MARY SCANO DRIVE",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01605",
    "phone": "5087543800",
    "overallRating": "3"
  },
  {
    "name": "PARSONS HILL REHABILITATION & HEALTH CARE CENTER",
    "address": "1350 MAIN STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01603",
    "phone": "5087914200",
    "overallRating": "1"
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
    "name": "ODD FELLOWS HOME OF MASSACHUSETTS",
    "address": "104 RANDOLPH ROAD",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01606",
    "phone": "5088536687",
    "overallRating": "1"
  },
  {
    "name": "BLAIRE HOUSE OF WORCESTER",
    "address": "116 HOUGHTON STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01604",
    "phone": "5087915543",
    "overallRating": "4"
  },
  {
    "name": "WORCESTER HEALTH CENTER",
    "address": "25 ORIOL DRIVE",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01605",
    "phone": "5088523330",
    "overallRating": "1"
  },
  {
    "name": "SHREWSBURY NURSING & REHABILITATION CENTER",
    "address": "40 JULIO DRIVE",
    "city": "SHREWSBURY",
    "state": "MA",
    "zipCode": "01545",
    "phone": "5088456786",
    "overallRating": "5"
  },
  {
    "name": "ROYAL SPRING VALLEY CENTER",
    "address": "81 CHATHAM STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01609",
    "phone": "5087543276",
    "overallRating": "4"
  },
  {
    "name": "WEST SIDE HOUSE LTC FACILITY",
    "address": "35 FRUIT STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01609",
    "phone": "5087526763",
    "overallRating": "1"
  },
  {
    "name": "NOTRE DAME LONG TERM CARE CENTER",
    "address": "559 PLANTATION STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01605",
    "phone": "5088523011",
    "overallRating": "5"
  },
  {
    "name": "BEAUMONT AT UNIVERSITY CAMPUS",
    "address": "378 PLANTATION STREET",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01605",
    "phone": "5087557300",
    "overallRating": "3"
  },
  {
    "name": "HOLY TRINITY EASTERN ORTHODOX N & R CENTER",
    "address": "300 BARBER AVENUE",
    "city": "WORCESTER",
    "state": "MA",
    "zipCode": "01606",
    "phone": "5088521000",
    "overallRating": "1"
  },
  {
    "name": "LIFE CARE CENTER OF AUBURN",
    "address": "14 MASONIC CIRCLE",
    "city": "AUBURN",
    "state": "MA",
    "zipCode": "01501",
    "phone": "5088324800",
    "overallRating": "5"
  },
  {
    "name": "CARE ONE AT MILLBURY",
    "address": "312 MILLBURY AVENUE",
    "city": "MILLBURY",
    "state": "MA",
    "zipCode": "01527",
    "phone": "5087930088",
    "overallRating": "4"
  }
]

----



