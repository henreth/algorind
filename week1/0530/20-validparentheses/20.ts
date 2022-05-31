function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false // if there are an odd number of chars, parantheses are left open
    let dict = {
        '(':')',
        '[':']',
        '{':'}'
    } // dictionary to conver parentheses 
    
    let stack = [] // array to add iterated chars to 
    
    for (let i in s.split('')){ // iterate through the string 
        // let i in [Array] will iterate through on indices of that array
        let char = s[i]
        if (dict[char]) stack.push(dict[char]) // if the current char is an opening parentheses, convert into closing parentheses and add to the stack
        else if (char !== stack.pop()) return false // if the current char is a closing parentheses, remove the last char of the stack and compare it to the current char
            // if the current char is not the same as the last char of stack, that they do not make a valid pair
    }
    
    return !stack.length // if stack is empty, then the string is valid
};