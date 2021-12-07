const fs = require('fs').promises;
const arguments = process.argv.slice(2)


async function readFile(file) {
    const data = await fs.readFile(file)
    console.log(data.toString())
}

async function writeFile(file, content) {
    await fs.writeFile(file,content)
}

const txt = `
    Prodotto: ${arguments[0]} 
    Quantità: ${arguments[1]}
`

writeFile('lista.txt', txt)


console.log("Prodotto scelto:", arguments[0], "\nQuantità:", arguments[1] )
