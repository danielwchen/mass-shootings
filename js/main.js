
// var map2 = d3.squareMap.setAttr({
//     labelStyle: 'abbr',
//     colorNumber: 6,

// }).render("data/gundeathspercapita.csv","#vis2");
var map1 = d3.squareMap.setAttr({
    labelStyle: 'abbr',
    colorNumber: 6,
    scale: d3.scaleThreshold().domain([10,20,100])
}).render("data/gunspercapita.csv","#vis1");