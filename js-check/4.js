var obj1 = {
    name : 'Object A'
}
console.log(obj1.name);
function obj2 ()
{
    this.name = 'Object B';
}
var o = new obj2()
console.log(o.name);