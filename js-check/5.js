const data = '2134A67098'
var str = '';
for (var sym in data)
{
    if (!isNaN(Number(sym)) && Number(sym)!=0 && (Number(sym)%2) ==0)
    {
        str += sym;
    }
    else
    {
        continue;
    }
}
console.log(str);