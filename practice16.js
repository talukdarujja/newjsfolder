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
