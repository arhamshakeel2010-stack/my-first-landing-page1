var hour = prompt("Enter current hour (0-23):");
hour = Number(hour);

if (hour >= 5 && hour < 12) {
    alert("Good Morning!");
}else if (hour >= 12 && hour < 17) {
    alert("Good Afternoon!");
}else if (hour >= 17 && hour <= 23) {
    alert("Good Evening / Good Night!");
}else if (hour >= 0 && hour < 5) {
    alert("Good Night!");
}else {
    alert("Invalid hour!");
}




