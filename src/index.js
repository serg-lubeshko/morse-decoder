const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr_list = expr.split('**********');
    const result = [];
    for (let i = 0; i < expr_list.length; i++) {
        let binary = expr_list[i].split('');
        let phraseDecode = '';
        while(binary.length) {
            let morse = '';
            let letter = binary.slice(0, 10);
            binary.splice(0, 10);
            for (let i = 0; i < 10; i += 2) {
                if (letter[i] == '1' && letter[i+1] == '0') {
                    morse += '.';
                }
                else if (letter[i] == '1' && letter[i+1] == '1') {
                    morse += '-';
                }
            }
            phraseDecode += MORSE_TABLE[morse];
        }
        result.push(phraseDecode);
    }
    return result.join(' ');
}

module.exports = {
    decode
}
