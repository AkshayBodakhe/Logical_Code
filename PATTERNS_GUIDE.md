# 🎯 Programming Patterns Mastery Guide

## 🚀 Introduction
Every programming problem follows certain patterns. Master these patterns, and you can solve ANY problem with confidence!

---

## 📋 Core Patterns in Your Code Collection

### **Pattern 1: Single Loop Iteration** 
**When to use**: Process each element once
**Examples**: Sum array, count vowels, find max/min

```javascript
// Template
for (let i = 0; i < array.length; i++) {
    // Process array[i]
    // Update result/counter/flag
}

// Your examples:
// - sumofAllElements.js
// - countVowels.js  
// - maxmin.js
```

### **Pattern 2: Nested Loop (Brute Force)**
**When to use**: Compare each element with every other element
**Examples**: Find duplicates, count pairs, sort array

```javascript
// Template
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        // Compare array[i] with array[j]
        // Take action if condition met
    }
}

// Your examples:
// - findDuplicates.js (brute force version)
// - countPairsWithGivenSum.js
// - sortArrayAsc.js
```

### **Pattern 3: Two Pointer Technique**
**When to use**: Work from both ends toward center
**Examples**: Palindrome check, reverse operations

```javascript
// Template
let start = 0;
let end = array.length - 1;

while (start < end) {
    // Process array[start] and array[end]
    // Move pointers based on condition
    start++;
    end--;
}

// Your examples:
// - isPalindrome.js (string version)
// - reverseArray.js concept
```

### **Pattern 4: Frequency Counter (Hash Map)**
**When to use**: Count occurrences, find duplicates efficiently
**Examples**: Anagrams, non-repeating elements, pair counting

```javascript
// Template
let frequency = {};

// Count phase
for (let item of array) {
    frequency[item] = (frequency[item] || 0) + 1;
}

// Use phase
for (let key in frequency) {
    if (frequency[key] === targetCount) {
        // Process this key
    }
}

// Your examples:
// - countPairsWithGivenSum.js (optimized version)
// - findDuplicates.js (improved version)
// - isAnagram.js
// - firstNonRepeatingChar.js
```

### **Pattern 5: Sliding Window**
**When to use**: Find subarray/substring with specific property
**Examples**: Subarray sum, longest substring

```javascript
// Template
let start = 0;
let currentSum = 0; // or other metric

for (let end = 0; end < array.length; end++) {
    // Expand window: add array[end]
    currentSum += array[end];
    
    // Shrink window if needed
    while (currentSum > target && start <= end) {
        currentSum -= array[start];
        start++;
    }
    
    // Check if current window meets condition
    if (currentSum === target) {
        return array.slice(start, end + 1);
    }
}

// Your examples:
// - subArrayWithGivenSum.js
// - longestSubstrWithoutRep.js
```

### **Pattern 6: String Processing**
**When to use**: Character-by-character string manipulation
**Examples**: Reverse, substring search, replace

```javascript
// Template
let result = "";
for (let i = 0; i < string.length; i++) {
    let char = string[i];
    // Process character based on conditions
    // Build result string
}

// Your examples:
// - reverseString.js
// - containsSubstr.js
// - replaceAllOccurances.js
```

### **Pattern 7: Array Manipulation**
**When to use**: Insert, delete, or rearrange elements
**Examples**: Insert at index, remove duplicates

```javascript
// Template
let newArray = [];
for (let i = 0; i < originalArray.length; i++) {
    if (shouldInclude(originalArray[i])) {
        newArray[newArray.length] = originalArray[i];
    }
}

// Your examples:
// - insertEleAtIndex.js
// - removeDuplicates.js
// - negativeAtOneSide.js
```

### **Pattern 8: Mathematical Operations**
**When to use**: Number manipulation, digit operations
**Examples**: Reverse number, factorial, prime check

```javascript
// Template for digit processing
while (number > 0) {
    let lastDigit = number % 10;
    // Process the digit
    number = Math.floor(number / 10);
}

// Your examples:
// - reverseNumber.js
// - palindrome.js (number version)
```

---

## 🎯 Pattern Recognition Strategy

### Step 1: Read the Problem
Ask yourself:
- What am I looking for? (single item, all items, count, boolean)
- What's the input size? (single number, array, string)
- Do I need to compare elements? (yes = nested loops or hash map)

### Step 2: Choose the Right Pattern
| Problem Type | Pattern to Use |
|--------------|----------------|
| "Count all..." | Single Loop + Counter |
| "Find duplicates" | Hash Map or Nested Loop |
| "Check palindrome" | Two Pointer |
| "Find pairs that sum to X" | Hash Map or Nested Loop |
| "Subarray/substring with condition" | Sliding Window |
| "Process each character" | Single Loop |
| "Sort/compare all pairs" | Nested Loop |

### Step 3: Apply the Template
1. Copy the appropriate template
2. Replace the generic parts with your specific logic
3. Add your validation and edge cases

---

## 🔥 Confidence Building Exercise

Let's practice with a new problem using patterns:

**Problem**: Find all pairs in an array that have a difference of K

**Solution Process**:
1. **Identify**: Looking for pairs → Could use Hash Map or Nested Loop
2. **Choose**: Hash Map for O(n) efficiency
3. **Apply Template**:

```javascript
function findPairsWithDifference(arr, k) {
    let numSet = new Set(arr); // Hash Map pattern
    let pairs = [];
    
    for (let num of arr) { // Single Loop pattern
        if (numSet.has(num + k)) {
            pairs.push([num, num + k]);
        }
    }
    return pairs;
}
```

---

## 📈 Your Learning Path

### Week 1: Master Basic Patterns
- Practice Single Loop (5 problems)
- Practice Hash Map (3 problems)
- Practice Two Pointer (3 problems)

### Week 2: Intermediate Patterns
- Practice Sliding Window (3 problems)
- Practice String Processing (5 problems)
- Practice Array Manipulation (5 problems)

### Week 3: Advanced Combinations
- Combine patterns (Hash Map + Sliding Window)
- Optimize existing brute force solutions
- Create variations of existing problems

---

## 💡 Problem-Solving Checklist

Before coding, ask:
- [ ] What pattern does this look like?
- [ ] What's my input and expected output?
- [ ] What edge cases should I handle?
- [ ] Can I optimize this with a different pattern?

**Remember**: Every problem you've solved uses these patterns. You already know them - now you're just organizing this knowledge! 🚀

---

## 🎓 Next Steps
1. Review your existing code and identify which pattern each uses
2. Practice the pattern templates on new problems
3. Time yourself - you should recognize patterns in 30 seconds
4. Build confidence by solving 1 problem per day using these patterns
