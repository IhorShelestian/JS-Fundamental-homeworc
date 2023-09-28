let date = new Date();
module.exports.date = date;
module.exports.getMessage = function(username) {
    let time = date.getHours();
    let greeting = '';
    if (time >= 5 && time < 12) greeting = 'morning';
    else if (time >= 12 && time < 18) greeting = 'afternoon';
    else if (time >= 18 && time < 23) greeting = 'evening';
    else if (time >= 23 && time < 5) greeting = 'night';
    return`Good ${greeting}, ${username}`;
}