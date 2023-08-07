const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
// console.log(randomFunc);


clipboard.addEventListener('click', () => {});

generateEl.addEventListener('click', () => {
   const length = +lengthEl.value
   console.log(typeof length);
   const hasUpper = uppercaseEl.checked;
   const hasLower = lowercaseEl.checked;
   const hasNumber = numbersEl.checked;
   const hasSymbol = symbolsEl.checked;

   console.log(hasLower, hasUpper,hasNumber,hasSymbol);
   resultEl.innerHTML = generatePassword(hasLower, hasUpper,hasNumber,hasSymbol,length);

	
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log('typeCount:', typesCount);

    const typesArr = [ { upper },{lower}, { number }, { symbol }].filter(item => Object.values(item)[0]);

    console.log('typeArr:' ,typesArr);

    // Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}

    // create a loop over length
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
            console.log(type);
			const funcName = Object.keys(type)[0];
            console.log(funcName);
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;

    
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26)+ 97);
}
// console.log(getRandomLower());

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26)+ 65);
}
// console.log(getRandomUpper());

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10)+ 48);
}
// console.log(getRandomNumber());

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomSymbol());
