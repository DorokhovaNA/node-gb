const colors = require("colors/safe");

let a = process.argv[2];
let b = process.argv[3];


if (isNaN(a) || isNaN(b)) {
  console.log(colors.red("Введите число"));
  return;
}

let count = 1;

let defaultColor = colors.green;
while (a <= b) {
	let i = 2
	while(i < a) {
        if(a % i == 0) {
		//	console.log(colors.red("Простых чисел нет"));
			break;
		}
    	i++;
	}

	if (i == a) {
		console.log(defaultColor(a));
    	count++;

		if (count % 3 == 0) {
			defaultColor = colors.red;
		} else if (count % 3 == 1) {
			defaultColor = colors.green;
		} else {
			defaultColor = colors.yellow;
		} 
	} 
	a++;
}