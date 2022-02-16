const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, 'text.txt'), (err, data) => {
    if (err) {
        console.log(err)
    }
    fs.mkdir(path.join(__dirname, 'main'), err1 => {
        if (err1) {
            console.log(err1);
        }

        fs.writeFile(path.join(__dirname, 'main', 'text.txt'), `${data.toString()}`, err2 => {
            if (err2) console.log(err2);
        })
    })
})

fs.unlink(path.join(__dirname, 'text.txt'), err => {
    if (err) console.log(err);
})

