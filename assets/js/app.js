const profileDataArgs = process.argv.slice(2, process.argv.length);



const printProfileData = profileDaraArr => {
    for (let i = 0; i < profileDaraArr.length; i++) {
        console.log(profileDaraArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDaraArr.forEach((profileItem) => {
        console.log(profileItem)
    });
            
};

printProfileData(profileDataArgs);