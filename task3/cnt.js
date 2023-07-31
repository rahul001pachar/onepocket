const fs = require('fs');

function countWords(text) {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
}

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err.message);
        return;
    }

    const wordCount = countWords(data);
    console.log('Total word count:', wordCount);
});
