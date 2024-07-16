
function endsWith (str,substr){
    if(substr.length > str.length) {
        return false
    }
    let startIndex = str.length - substr.length;

    for(let i = 0; i < substr.length;i++){
        if(str[startIndex+i]!== substr[i]){
            return false
        }
    }
    return true
}

console.log(endsWith("hello world", "world"));