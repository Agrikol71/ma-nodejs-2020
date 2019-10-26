function planet (name, diam)
{
    this.name = name;
    this.diam = diam;
    this.volume = function(){ return 'Планета '+this.name+' має об\'єм '+3*Math.PI*this.diam/4;}
}
var Earth = new planet('Земля', 400)
console.log(Earth.volume());