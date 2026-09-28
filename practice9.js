function getDayname(day) {
    switch(day) {
        case 1:
            return "monday";
            break;
        case 2:
            return "tuesday";
            break;
        case 3:
            return "wednesday";
            break;
        case 4:
            return "thursday";
            break;
        case 5:
            return "friday";
            break;
        case 6:
            return "saturday";
            break;
        case 7:
            return "sunday";
            break;
        default:
            return "invalid numbers";
    }
}
console.log(getDayname(3));
