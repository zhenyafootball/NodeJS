const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, 'main', 'main1'), err => {

    if (err) {
        console.log(err)
        throw err
    }

    fs.writeFile(path.join(__dirname, 'main', 'text1.txt'), 'text file1', err => {
        if (err) {
            console.log(err)
            throw err
        }

        fs.writeFile(path.join(__dirname, 'main', 'text2.txt'), 'text file2', err => {
            if (err) {
                console.log(err)
                throw err
            }

            fs.mkdir(path.join(__dirname, 'main', 'main2'), err => {
                if (err) {
                    console.log(err)
                    throw err
                }
                checker()
            })

        })
    });





})

const checker = () => {
    fs.readdir(path.join(__dirname, 'main'), (err, files) => {

        if (err) {
            console.log(err)
            throw err;
        }

        files.forEach(file => {


            fs.lstat(path.join(__dirname, 'main', file), (err1, data) => {
                if (err) {
                    console.log(err);
                    throw err
                }

                if (data.isDirectory()) {
                    fs.rename(path.join(__dirname, 'main', file), path.join(__dirname, 'main', `_${file}`), err1 => {
                        if (err1) {
                            console.log(err1)
                            throw err1
                        }
                    });
                } else {
                    fs.writeFile(path.join(__dirname, 'main', file), '', err2 => {
                        if (err2) {
                            console.log(err2);
                            throw err2
                        }
                    })
                }

            });


        });
    })
}