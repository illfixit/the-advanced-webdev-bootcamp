var minYear = d3.min(birthData, d => d.year);
var width = 600;
var height = 600;
var yearData = birthData.filter(d => d.year === minYear);