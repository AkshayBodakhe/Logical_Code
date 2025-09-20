# 🎯 Pattern Mapping: Your Code → Programming Patterns

## 🚀 Build Confidence by Recognizing Patterns in Your Own Code!

---

## 📊 Pattern 1: Single Loop Iteration
> **Purpose**: Process each element exactly once

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `maxmin.js` | Find max/min in array | ✅ Single pass through array |
| `sumofAllElements.js` | Sum all, even, odd elements | ✅ Single pass with counters |
| `countVowels.js` | Count vowels in string | ✅ Single pass through string |
| `findOccurrence.js` | Count specific element | ✅ Single pass with counter |
| `reverseString.js` | Build reversed string | ✅ Single pass backwards |

**🎯 Pattern Template**:
```javascript
for (let i = 0; i < input.length; i++) {
    // Process input[i]
    // Update result/counter
}
```

---

## 📊 Pattern 2: Nested Loop (Brute Force)
> **Purpose**: Compare each element with every other element

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `findDuplicates.js` (first version) | Find all duplicates | ✅ Compare each element with all others |
| `countPairsWithGivenSum.js` (first version) | Count pairs that sum to target | ✅ Check all possible pairs |
| `sortArrayAsc.js` | Sort array using bubble sort | ✅ Compare adjacent elements |
| `secondMaxMin.js` (second function) | Sort to find second largest | ✅ Bubble sort implementation |

**🎯 Pattern Template**:
```javascript
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        // Compare array[i] with array[j]
    }
}
```

---

## 📊 Pattern 3: Two Pointer Technique
> **Purpose**: Work from both ends toward center

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `isPalindrome.js` (string version) | Check if string reads same forwards/backwards | ✅ Compare characters from both ends |
| `palindrome.js` (isPalindrome1 function) | Optimized palindrome check | ✅ Two pointers moving toward center |

**🎯 Pattern Template**:
```javascript
let start = 0;
let end = string.length - 1;
while (start < end) {
    if (string[start] !== string[end]) return false;
    start++; end--;
}
```

---

## 📊 Pattern 4: Frequency Counter (Hash Map)
> **Purpose**: Count occurrences for efficient lookups

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `findDuplicates.js` (improved version) | Find duplicates efficiently | ✅ Count frequency, then filter |
| `countPairsWithGivenSum.js` (optimized) | Count pairs in O(n) time | ✅ Store complements in hash map |
| `firstNonRepeatingChar.js` | Find first unique character | ✅ Count frequency, then find first with count=1 |
| `isAnagram.js` | Check if two strings are anagrams | ✅ Count character frequencies |
| `nonRepeatingNum.js` | Find all unique numbers | ✅ Count frequency, filter count=1 |

**🎯 Pattern Template**:
```javascript
let frequency = {};
// Phase 1: Count
for (let item of input) {
    frequency[item] = (frequency[item] || 0) + 1;
}
// Phase 2: Use the counts
for (let key in frequency) {
    if (frequency[key] === targetCount) {
        // Process this key
    }
}
```

---

## 📊 Pattern 5: Sliding Window
> **Purpose**: Find subarray/substring with specific property

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `subArrayWithGivenSum.js` | Find subarray with target sum | ✅ Expand/shrink window based on sum |
| `longestSubstrWithoutRep.js` | Longest substring without repeating chars | ✅ Sliding window with hash map |

**🎯 Pattern Template**:
```javascript
let start = 0;
for (let end = 0; end < array.length; end++) {
    // Expand window: include array[end]
    while (shouldShrink) {
        // Shrink window: exclude array[start]
        start++;
    }
    // Check if current window is valid/optimal
}
```

---

## 📊 Pattern 6: String Processing
> **Purpose**: Character-by-character manipulation

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `containsSubstr.js` | Check if substring exists | ✅ Pattern matching character by character |
| `startsWith.js` / `endsWith.js` | Check string prefix/suffix | ✅ Character-by-character comparison |
| `replaceAllOccurances.js` | Replace all instances of substring | ✅ Build new string while processing |
| `toTitleCase.js` | Capitalize first letter of each word | ✅ State-based character processing |

**🎯 Pattern Template**:
```javascript
let result = "";
for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // Process char based on conditions
    result += processedChar;
}
```

---

## 📊 Pattern 7: Array Manipulation
> **Purpose**: Insert, delete, or rearrange elements

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `insertEleAtIndex.js` | Insert element at specific position | ✅ Build new array with insertion |
| `deleteEleAtIndex.js` | Remove element at specific position | ✅ Build new array skipping index |
| `removeDuplicates.js` | Remove duplicate elements | ✅ Build new array with unique elements |
| `negativeAtOneSide.js` | Move negatives to one side | ✅ Partition array based on condition |
| `mergeArrays.js` | Combine two arrays | ✅ Build new array from multiple sources |

**🎯 Pattern Template**:
```javascript
let newArray = [];
for (let i = 0; i < originalArray.length; i++) {
    if (shouldInclude(originalArray[i])) {
        newArray[newArray.length] = originalArray[i];
    }
}
```

---

## 📊 Pattern 8: Mathematical Operations
> **Purpose**: Number manipulation, especially digit operations

| Your File | What it does | Pattern Recognition |
|-----------|--------------|-------------------|
| `reverseNumber.js` | Reverse digits of a number | ✅ Extract digits using modulo and division |
| `palindrome.js` (number version) | Check if number is palindrome | ✅ Extract and rebuild digits |
| `factorial.js` | Calculate factorial | ✅ Iterative multiplication |
| `fibonacci.js` | Generate Fibonacci sequence | ✅ State-based iteration |
| `primeNumber.js` | Check if number is prime | ✅ Divisibility testing with optimization |

**🎯 Pattern Template**:
```javascript
// For digit extraction:
while (number > 0) {
    let lastDigit = number % 10;
    // Process the digit
    number = Math.floor(number / 10);
}

// For mathematical sequences:
for (let i = start; i <= end; i++) {
    // Mathematical operation
}
```

---

## 🔥 Confidence Building Exercise

**Look at any problem and ask:**
1. **What am I doing?** → Single pass, comparing pairs, building something new?
2. **What pattern is this?** → Use the table above to identify
3. **What's my template?** → Copy the appropriate template
4. **How do I customize it?** → Replace generic parts with problem-specific logic

---

## 🎯 Practice Challenge

Pick any 3 problems you haven't solved yet and:
1. **Identify the pattern first** (before coding)
2. **Copy the template**
3. **Customize for your problem**
4. **Code with confidence!**

### Example Practice Problems:
- Find the second smallest element (Pattern 1: Single Loop)
- Check if array contains a specific pair (Pattern 4: Hash Map)
- Find longest palindromic substring (Pattern 5: Sliding Window)

---

## 💡 Remember

**You already know these patterns!** You've implemented them successfully in 80+ problems. This is just organizing your existing knowledge to boost your confidence! 🚀

**Key insight**: Every programming problem is just a variation of these 8 patterns. Master pattern recognition, and you can solve ANY problem!
