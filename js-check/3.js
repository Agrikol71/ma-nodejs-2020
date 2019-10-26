let text = 'Hello world!';
let fnd = 'o';
let pos = -1;
while((pos = text.indexOf(fnd, pos+1))!=-1)
{
    console.log(pos+1);
}
console.log(text.replace(/l/g, ''));