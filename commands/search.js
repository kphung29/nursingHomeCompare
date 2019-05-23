// const fs = require('fs');
// const path = require('path');
const inquirer = require('inquirer');
const distance = require('../distance');
const providerInfo = require('../ProviderInfo.json');
const zipCodeCentroids = require('../zip_code_centroids.json');

module.exports = search = (args) => {
  const questions = [
    {type: 'number', name: 'radius', message: 'What is the max radius from zip code?'}
  ];
  const [ zipcode ] = args;
  const centroid = zipCodeCentroids.find(z => z.zip === zipcode);
  
  if (!centroid) {
    console.error('zip code not existent');
    process.exit(1);
  }
  const { lat, lgt } = centroid;
  inquirer.prompt(questions)
    .then(answer => answer.radius)
    .then(radius => zipCodeCentroids
      .filter(centroid => distance(lat, lgt, centroid.lat, centroid.lgt) < radius))
      .then(zipsInDistance => zipsInDistance.map(z => z.zip))
      .then(zips => providerInfo.filter(info => zips.includes(info[5])))
      .then(items => items.map(item => {
      let [id, name, address, city, state, zipCode, phone] = item;
      let overallRating = item[20].slice(0,1);
      return { name, address, city, state, zipCode, phone, overallRating }
      }))
      .then(locations => {
      /* issues trying to send locations results to .json file */  
      //   fs.writeFile(path.join(__dirname, '../results.json'), JSON.stringify(locations, null, 2), 'utf8', (err) => {
      //     if (err) {
      //       return console.log(err);
      //   }
      //   console.log('wrote to results.json');
      // });
        console.log("We have found " + locations.length + " skilled nursing facilities.");
        console.log(JSON.stringify(locations, null, 2));
      });
}
