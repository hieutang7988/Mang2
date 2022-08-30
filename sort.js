let num = [0, 1,12,6,17,23,28,222,3,35];
num.sort();
num.sort(function (a,b) {
    return b-a;
})
document.write(num);
console.log(num);
