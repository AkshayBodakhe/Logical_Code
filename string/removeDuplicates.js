
function removeDuplicates (str) {
    let result = ''
    let seen = {}

    for(let i =0;i<str.length;i++){
        let char = str[i]
        if(!seen[char]){
            result += char
            seen[char] = true
        }
    }
    return result
}

console.log(removeDuplicates("hello"));       
console.log(removeDuplicates("mississippi"));  
console.log(removeDuplicates("abcd"));         // Output: "abcd"
console.log(removeDuplicates("aabbccdd"));