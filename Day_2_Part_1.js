//Grab inputs
const delimiter = '\n'
const inputArray = document.querySelectorAll('pre')[0].innerText.split(delimiter)

console.log(inputArray)

/***TESTING***/
//const testArray = ['7 6 4 2 1', '1 2 7 8 9', '9 7 6 2 1', '1 3 2 4 5', '8 6 4 4 1', '1 3 6 7 9', '17 16 13 12 11 10 7 6'];

console.log(countSafeReports(inputArray));

function countSafeReports(reports) {
	let total = 0;
	//loop through reports
	for (const report of reports) {
		let consistentDirection = false;
		let safeDistance = false;
		consistentDirection = checkDirection(report);
		safeDistance = checkDistance(report);
		if ((consistentDirection && safeDistance) && report !== '') {
			total++;
		}
	}
	return total
}

function checkDirection(report) {
	let previousDirection = '';
	let currentDirection = '';
	let consistentDirection = true;
	let levels = report.split(' ');
	for (let i = 1; i <= levels.length; i++) {	//don't need to check report[0]
		if (parseInt(levels[i]) < parseInt(levels[i - 1])) {
			currentDirection = 'down';
			console.log()
		} else if (parseInt(levels[i]) > parseInt(levels[i - 1])) {
			currentDirection = 'up';
		} 
		if (i !== 1 && (currentDirection !== previousDirection)) {
			consistentDirection = false;
		}
		previousDirection = currentDirection;	//prepare next loop
	}
	return consistentDirection
}

function checkDistance(report) {
	let safeDistance = true;
	let distance = 0;
	let levels = report.split(' ');
	for (let i = 1; i <= levels.length; i++) {
		distance = Math.abs(parseInt(levels[i]) - parseInt(levels[i - 1]));
		if (distance < 1 || distance > 3) {
			safeDistance = false;
		}
	}
	return safeDistance
}
