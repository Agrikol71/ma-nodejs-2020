const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 0];
var sum = [];
var len = first.length;
for(var i = 1; i<=len; i++)
{
    sum.push(first[len-i]);
    sum.push(second[len-i]);
}
console.log(sum);