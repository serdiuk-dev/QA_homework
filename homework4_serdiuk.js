function checkProbabilityTheory(count) {
	let evenCount = 0;
	let oddCount = 0;

	for (let i = 0; i < count; i++) {
		let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
		if (randomNum % 2 === 0) {
			evenCount++;
		} else {
			oddCount++;
		}
	}

	let evenPercentage = (evenCount / count) * 100;
	let oddPercentage = (oddCount / count) * 100;

	console.log(`Кількість згенерованих чисел: ${count}`);
	console.log(`Парних чисел: ${evenCount}`);
	console.log(`Непарних чисел: ${oddCount}`);
	console.log(`Відсоток парних чисел: ${evenPercentage.toFixed(2)}%`);
	console.log(`Відсоток непарних чисел: ${oddPercentage.toFixed(2)}%`);
}

console.log(checkProbabilityTheory(1000))