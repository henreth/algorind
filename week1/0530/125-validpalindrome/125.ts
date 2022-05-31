function isPalindrome(s: string): boolean {
    let input = s.replace(/[^0-9a-z]/gi, '').toLowerCase()
    return input===input.split('').reverse().join('')
};