const fs = require('fs');

// NOTES ON THIS SECTION
// create two functions that return a Promise, one for writing a file and another for copying a file. 
// That means we'll execute an asynchronous function that enables us to use .then() and .catch() methods to handle its response.
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = content => {
    return new promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'Style sheet copied successfully!'
            });
        })
    });
};

// NOTES ON THIS SECTION
// We now have the two functions for handling the project's output.
// We're actually exporting an object with the two functions, writeFile() and copyFile(), used as methods, writeFile and copyFile

// Example below:

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };

// ES6 & easier way to write the same code:
// This is known as using shorthand property names. 
// So if we have a property key name with the same name as the value we're associating with it, like writeFile: writeFile,
//  we can just say writeFile, and it will understand that we're using writeFile for both the property name and its value.
module.exports = { writeFile, copyFile };