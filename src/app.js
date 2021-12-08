const fs = require('fs');
const generatePage = require('./page-template.js');  


const profileDataArgs = process.argv.slice(2, process.argv.length);


const [Name, github] = profileDataArgs;




fs.writeFile('index.html', generatePage(Name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!')
});

