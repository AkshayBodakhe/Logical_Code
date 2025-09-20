
function endsWith (str,substr){
    if(substr.length > str.length) {
        return false
    }
    let startIndex = str.length - substr.length;

    for(let i = 0; i < substr.length;i++){
        if(str[startIndex+i]!== substr[i]){ // to check startWith just remove the startIndex
            return false
        }
    }
    return true
}

console.log(endsWith("hello world", "world"));

// 🧠 Similar Problems
// 1. StartsWith function (check if str starts with substr)
// 2. Check if string includes a substring (without using .includes())
// 3. Find index of a substring manually
// 4. Check if a word is a prefix or suffix
// 5. Implement your own .slice() or .substring() function
