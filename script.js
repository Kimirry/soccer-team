let text = "";
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday!!";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend!!";
        break;
    case 4:
    case 5:
        text = "Soon it's weekend!"
}
console.log(text);