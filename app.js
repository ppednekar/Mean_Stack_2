const fs = require('fs');
const csvjson = require('csvjson');

const readFile = require('fs').readFile;
readFile('./customer-data.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
    const jsonObj = csvjson.toObject(fileContent);
    console.log(jsonObj);
    fs.writeFileSync('customer-data.json', JSON.stringify(jsonObj));
});