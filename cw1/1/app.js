const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, 'file1.txt'), (err, data) => {
    if (err) {
        console.log(err)
        throw err;
    }

    fs.appendFile(path.join(__dirname, 'file2.txt'), data.toString(), err1 => {
        if (err1) {
            console.log(err1);
        }
    })

})