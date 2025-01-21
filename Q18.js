function isBlank(str) {
    return str.trim() === '';
}

console.log(isBlank("")); 
console.log(isBlank(" ")); 
console.log(isBlank("Hello")); 
console.log(isBlank("   Hello   ")); 
