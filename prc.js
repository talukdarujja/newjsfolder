// 18. Traffic Signal

// Write:

// trafficLight(color)

// Return:

// "red" → "Stop"
// "yellow" → "Wait"
// "green" → "Go"

// Otherwise:

// "Invalid Color"

// Use switch.

function trafficLight(color) {
    switch(color) {
        case "red":
            return "stop";
            break;
        case "yellow":
            return "wait";
            break;
        case "green":
            return "Go";
            break;
        default:
            return "invalid color";
    }
}
console.log(trafficLight("red"));

// 19. Grade Calculator

// Write:

// getGrade(marks)

// Return:

// 90–100 → "A"
// 75–89  → "B"
// 60–74  → "C"
// 40–59  → "D"
// Below 40 → "F"

// Use if...else if...else.
function getgrade(marks) {
    if(marks>=90 && marks<=100) {
        return "A";
    } else if (marks>=75 && marks<=89) {
        return "B";
    } else if(marks>=60 && marks<=74) {
        return "C";
    } else if(marks>=40 && marks<=59) {
        return "D";
    } else {
        return "F";
    }
}
console.log(getgrade(89));


// 20. Login Status

// Write:

// checkLogin(username, password)

// Return:

// "Login Successful"

// if:

// username = "admin"
// password = "1234"

// Otherwise return:

// "Invalid Credentials"

// Extra requirement: Use a nested if.
function checkLogin(username, password) {
    if(username=="admin") {
        if(password=="1234") {
            return "login succesful";
        }
    } else {
        return "invalid credentials";
    }
}
console.log(checkLogin("admin","1234"))

// 21. Find First Even Number

// Write:

// findFirstEven(numbers)

// Use a for loop.

// Check each number.
// When the first even number is found, store it.
// Stop using break.
// Return the number.
// If no even number exists, return -1.

// Example:

// findFirstEven([3, 7, 9, 12, 15])

// Expected:

// 12
function findFirstEven(numbers) {
    found=false;
    even_num=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]%2==0) {
            even_num=numbers[i];
        }
        if(numbers[i]==even_num) {
            found=true;
            return "first element found at index " + i;
    }
}
return -1;
}
console.log(findFirstEven([3, 7, 9, 12, 15]));

// 44. Count Until Negative

// Write:

// countUntilNegative(numbers)

// Use a for loop.

// Count positive numbers.
// Ignore zero using continue.
// Stop when a negative number is encountered using break.
// Return the count.

// Example:

// countUntilNegative([5, 8, 0, 10, 7, -2, 20])

// Expected:

// 4
function countUntilNegative(numbers) {
    count=0;
    for(let i=0;i<numbers.length;i++) {
        if(numbers[i]==0) {
            continue;
        }
        if(numbers[i]<0) {
        break;
        }
    count++;
    }
    return count;
}
console.log(countUntilNegative([5, 8, 0, 10, 7, -2, 20]));

