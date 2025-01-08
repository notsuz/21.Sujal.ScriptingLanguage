function reverseNumber(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNum = parseInt(reversedStr) * Math.sign(num);
    
    return reversedNum;
}

console.log(reverseNumber(12345));  
console.log(reverseNumber(-6789)); 
