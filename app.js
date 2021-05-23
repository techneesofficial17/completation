const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    '_',
    '|',
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
];
let clicked = false;

function getRandom() {
    return Math.floor(Math.random() * letters.length);
}

// dom content
const copyBtn = document.querySelector('#copyBtn');
const textArea = document.querySelector('#textArea');
const btn = document.querySelector('#btn');
const alertBox = document.querySelector('.alertText');

btn.addEventListener('click', () => {
    clicked = true;
    let randomPswd = '';
    for (let i = 0; i < 16; i++) {
        randomPswd += letters[getRandom()];
    }
    textArea.value = randomPswd;
});

copyBtn.addEventListener('click', () => {
    let content = textArea.value;
    console.log(content);
    if (content === 'Click to generate !') {
        alertBox.style.color = 'red';

        alertBox.innerHTML = 'Nothing to copy !!!';
        alertBox.style.visibility = 'visible';
        setTimeout(() => {
            alertBox.style.visibility = 'hidden';
        }, 1500);
    } else {
        alertBox.innerHTML = 'Sucessfully Copied !!';
        alertBox.style.visibility = 'visible';
        alertBox.style.color = 'green';
        setTimeout(() => {
            alertBox.style.visibility = 'hidden';
        }, 1500);
        textArea.select();
        document.execCommand('copy');
    }
    textArea.value = 'Click to generate !';
});