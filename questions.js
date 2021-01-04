const questions = [
    "What is your name",
    "What would you rather be playing or doing",
    "What is your coding language"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();
    const answers = [];


process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    // process.stdout.write(`\n\n\n ${data.toString().trim()} \n\n`);
    if (answers.length < questions.length) {
        ask (answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`
    
    Hi ${name}, you can write ${lang} tomorrow,
    today you should go and play ${activity}
    
    `);
});

