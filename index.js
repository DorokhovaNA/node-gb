const colors = require("colors/safe");

const a = process.argv[2];
const b = process.argv[3];


if (isNaN(a) || isNaN(b)) {
  console.log(colors.red("Введите число"));
  return;
}

let count = 1;

const defaultColor = colors.green;
while (a <= b) {
	let i = 2
	for(i; i < a; i++) {
        if(a % i === 0) {
			break;
		}
    	return true;
	}

	if (i === a) {
		console.log(defaultColor(a));
    	count++;

		if (count % 3 === 0) {
			defaultColor = colors.red;
		} else if (count % 3 === 1) {
			defaultColor = colors.green;
		} else {
			defaultColor = colors.yellow;
		} 
	} else {
		console.log(colors.red("Простых чисел нет"));
	}

	a++;
}