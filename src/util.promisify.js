const util = require('util')
const fs = require('fs')
const readAsync = util.promisify(fs.readFile)

readAsync('../package.json')
    .then(JSON.parse)
    .then(data => console.log('promise then:', data.name))
    .catch(err => console.error(err));

(async (path) => {
    try {
        const data = await readAsync(path)
        console.log('async:', (JSON.parse(data)).name)
    } catch (error) {
        console.error(error)
    }
})('../package.json')