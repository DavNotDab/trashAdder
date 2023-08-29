const fs = require('fs');

fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading config file:', err);
        return;
    }

    const configData = JSON.parse(data);
    const filename = configData.filename;
    const trashCharacters = configData.trashCharacters;

    function trashAdder(text) {
        const result = [];
        for (let i = 0; i < text.length; i += 2) {
            result.push(text.slice(i, i + 2));
            if (i + 2 < text.length) {
                result.push(trashCharacters[Math.floor(Math.random() * trashCharacters.length)]);
            }
        }
        return result.join('');
    }

    // Load input text from the file
    fs.readFile(filename, 'utf8', (err, inputText) => {
        if (err) {
            console.error('Error reading input text file:', err);
            return;
        }

        const modifiedText = trashAdder(inputText);
        console.log(modifiedText);
    });

});