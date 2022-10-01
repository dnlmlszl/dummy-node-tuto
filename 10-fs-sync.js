const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)  creates or overwrites a file at the path

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    {flag: 'a'}                                     // if we add this flag, it will just add the value and will not overwrite the text file
    )

    console.log('done with this task');
    console.log('starting the next one');