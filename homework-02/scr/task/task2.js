function planet (name, diam)
{
    this.name = name;
    this.diam = diam;
    return vol(this.name, this.diam);
}
function vol(name, d)
{
    return 'Планета '+this.name+' має об\'єм '+3*Math.PI*this.diam/4;
}
module.exports = {planet, vol};