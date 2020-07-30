var minYear = d3.min(birthData, d => d.year);
var width = 600;
var height = 600;
var yearData = birthData.filter(d => d.year === minYear);

var continents = [];
for (var i = 0; i < birthData.length; i++) {
  var continent = birthData[i].continent;
  if (continents.indexOf(continent) === -1) {
    continents.push(continent);
  }
}

var colorScale = d3.scaleOrdinal()
                   .domain(continents)
                   .range(d3.schemeCategory10);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')')
    .classed('chart', true);

var arcs = d3.pie()
             .value(d => d.births)
             (yearData);

var path = d3.arc()
             .outerRadius(width / 2 - 10)
             .innerRadius(width / 4);

d3.select('.chart')
  .selectAll('.arc')
  .data(arcs)
  .enter()
  .append('path')
    .classed('arc', true)
    .attr('fill', d => colorScale(d.data.continent))
    .attr('stroke', 'black')
    .attr('d', path);














