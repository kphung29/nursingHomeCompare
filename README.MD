Nursing Home Compare
============
* <b>to start:</b> npm install
* <b>make script executable:</b> chmod +x index.js, followed by ./index.js, then the command npm link 
* <b>input:</b> nhc search [input zip code]
* <b>next prompt:</b> What is the max radius from zip code?  [input miles]
* <b>create json files, already provided</b> node data-parser.js



* ex. nhc search 01608
* What radius?  1

* expected output:  We have found 5 skilled nursing facilities.
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
  etc.
]
</h6>

----



