const fs = require(`fs`);
const path = require(`path`)


const folders = fs.readdirSync(path.join(__dirname, `../dataset`));

console.log(`[${folders.map(x => `"${x.toLowerCase()}"`).join(",")}]`);