const lyrics = [
    "I fought the law",
    "Her name is Rio",
    "I paid my dues"
];

const ask = (i=1) => {
    process.stdout.write (`\n\n\n ${lyrics[i]}`)
    process.stdout.write(`>`);
}

ask();

process.stdin.on("data", data=> {
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)

});

