function fibonacci(n) {
// your code here
	if(n === 1){
		return 0;
	}
	else if(n===2){
		return 1;
	}
	else{
		return fibonacci(n-1) + fibonacci(n-2);	
	}
}

module.exports = fibonacci;
