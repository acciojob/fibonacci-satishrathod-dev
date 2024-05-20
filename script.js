function fibonacci(n) {
// your code here
	// if(n === 1){
	// 	return 0;
	// }
	// else if(n===2){
	// 	return 1;
	// }
	// else{
	// 	return fibonacci(n-1) + fibonacci(n-2);	
	// }
	if (n <= 1)
        return n;

    let previousFib = 0, currentFib = 1;
    for (let i = 2; i <= n; i++) {
        let newFib = previousFib + currentFib;
        previousFib = currentFib;
        currentFib = newFib;
    }

    return currentFib;
}

module.exports = fibonacci;
