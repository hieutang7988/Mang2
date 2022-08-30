var str = "The Quick Brown Fox";
var UPPER = 'THEQUICKBROWNFOX';
var LOWER = 'thequickbrownfox';
var result = [];

for(var x=0; x<str.length; x++) {
    if(UPPER.indexOf(str[x]) !== -1) {
        result.push(str[x].toLowerCase());
    } else if(LOWER.indexOf(str[x]) !== -1) {
        result.push(str[x].toUpperCase());
    } else {
        result.push(str[x]);
    }
}
document.write(result.join(''));