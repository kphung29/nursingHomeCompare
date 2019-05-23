// importing modules to read/write
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'ProviderInfo_Download.csv'), (err, data) => {
  // creating columns and items using \n && "," delimiters
  const [columnsString, ...itemsStrings] = data.toString().split('\n');
  const columns = columnsString.split(',');
  const items = itemsStrings.map(str => str.split('","'));
  // converting to .json format
  // using fs/path to save file in correct location, stringify 3rd param = spacing
  fs.writeFile(path.join(__dirname, 'ProviderInfo.json'), JSON.stringify(items, null, 2), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('ProviderInfo.json created successfully!');
  });
});

fs.readFile(path.join(__dirname, 'zip_code_centroids.csv'), (err, data) => {
  const finalArr = data.toString().split('\n')
    .filter((item, index) => index > 0)
    .map(line => {
    // destructing values
    const [zip, lat, lgt] = line.split(',');
    // ensure coordinates lat/lgt are numbers
    return { zip, lat: Number(lat), lgt: Number(lgt) };
  })
  fs.writeFile(path.join(__dirname, 'zip_code_centroids.json'), JSON.stringify(finalArr, null, 2), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('zip_code_centroids.json created successfully!');
  })
})