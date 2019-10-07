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
    let letters = '';
    let i = 0;
    while(i < expr.length){
       let verb = '';
        if(expr.substr(i , 10) === '**********'){
            letters += ' ';
            i+=10;
            continue;
        }
        for(let j = i; j < i+10; j+=2){
            if(expr.charAt(j) === '0'){
                continue;
            }
            if(expr.charAt(j) === '1' && expr.charAt(j+1) === '1'){
                verb+='-';
            }
            else if(expr.charAt(j) === '1' && expr.charAt(j+1) === '0'){
                verb+='.';
            }
        }
        if(verb !== ''){
            letters += MORSE_TABLE[verb];
        }

        i+=10;
    }
    return letters;
}


module.exports = {
    decode
}