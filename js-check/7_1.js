const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];
var fnd = 'cucumber';
switch(fnd)
{
    case vegetables[0]:
    case vegetables[1]:
    case vegetables[2]:
        console.log('vegetables');
        break;
    case fruits[0]:   
    case fruits[1]:  
    case fruits[2]:
        console.log('fruits');
        break;
    default:
        console.log('not found');
        break;
}