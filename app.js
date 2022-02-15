const fs = require("fs");
const path = require("path");


fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err => {
    if (err) console.log(err);
}))

fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err => {
    if (err) console.log(err);
}))


const onlineUsers = [
    {name: "Karl", age: 22, city: "Lviv"},
    {name: "Oleh", age: 15, city: "Kyiv"}
];

const inPersonUsers = [
    {name: "Tomas", age: 19, city: "Lviv"},
    {name: "Olga", age: 19, city: "Vinnytsia"}
];

fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), '', (err) => {
    if (err) {
        console.log(err);
    }
});


inPersonUsers.forEach(user => {
    for (const key in user) {
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), `${key}:${user[key]}\n`, (err => {
            if (err) {
                console.log(err);
            }
        }));
    }
    fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), `\n`, (err => {
        if (err) {
            console.log(err)
        }
    }));
});


fs.writeFile(path.join(__dirname, 'main', 'online', 'file.txt'), '', (err) => {
    if (err) {
        console.log(err);
    }
});

onlineUsers.forEach(user => {
    for (let key in user) {
        fs.appendFile(path.join(__dirname, 'main', 'online', 'file.txt'), `${key}:${user[key]}\n`, (err => {
            if (err) {
                console.log(err)
            }
        }));
    }
    fs.appendFile(path.join(__dirname, 'main', 'online', 'file.txt'), `\n`, (err => {
        if (err) {
            console.log(err)
        }
    }))
});


const moover = () => {
    fs.readFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), ((err, data) => {
        if (err) {
            console.log(err);
        }


        fs.readFile(path.join(__dirname, 'main', 'online', 'file.txt'), (err1, data1) => {
            if (err1) {
                console.log(err1)
            }


            fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'file.txt'), `${data1.toString()}`, {flag: "w"}, err2 => {
                if (err2) {
                    console.log(err2)
                }

                fs.appendFile(path.join(__dirname, 'main', 'online', 'file.txt'), `${data.toString()}`, {flag: "w"}, err2 => {
                    if (err2) {
                        console.log(err2)
                    }
                });

            });

        })

    }));

}

moover();