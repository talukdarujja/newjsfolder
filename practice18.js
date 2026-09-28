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

