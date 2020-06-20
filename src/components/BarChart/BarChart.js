import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {select} from 'd3-selection';
import {max} from 'd3-array';
import {scaleLinear, scaleBand} from 'd3-scale';
import {axisLeft, axisBottom} from 'd3-axis';

import './BarChart.css';

const BarChart = ({data, title, xLabel, yLabel}) => {
  const d3svg = useRef(null);
  // margin convention often used with D3
  const margin = {top: 80, right: 60, bottom: 80, left: 60};
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;
  const color = ['#3f51b5', '#61dafb', '#b33535', '#283250'];

  useEffect(() => {
    if (data && d3svg.current) {
      let svg = select(d3svg.current);

      // scales
      const xMax = max(data, d => d[xLabel]);

      const xScale = scaleLinear().domain([0, xMax]).range([0, width]);

      const yScale = scaleBand()
        .domain(data.map(d => d[yLabel]))
        .range([0, height])
        .paddingInner(0.25);

      // append group translated to chart area
      svg = svg
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

      // draw header
      if (title) {
        svg
          .append('g')
          .attr('class', 'bar-header')
          .attr('transform', `translate(0, ${-margin.top / 2})`)
          .append('text')
          .append('tspan')
          .text(title);
      }

      // draw bars
      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('y', d => yScale(d[yLabel]))
        .attr('width', d => xScale(d[xLabel]))
        .attr('height', yScale.bandwidth())
        .style('fill', function callback(d, i) {
          return color[i % 4]; // use colors in sequence
        });

      // draw axes
      const xAxis = axisBottom(xScale);
      svg
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${height + margin.bottom / 3})`)
        .call(xAxis);

      const yAxis = axisLeft(yScale).tickSize(0);
      svg
        .append('g')
        .attr('class', 'y axis')
        .attr('transform', `translate(${-margin.left / 3},0)`)
        .call(yAxis);
    }
  }, [
    data,
    color,
    height,
    margin.bottom,
    margin.left,
    margin.top,
    title,
    width,
    xLabel,
    yLabel
  ]);

  return (
    <svg
      className="bar-chart-container"
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      role="img"
      ref={d3svg}
    />
  );
};

BarChart.defaultProps = {
  title: '',
  xLabel: '',
  yLabel: '',
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    player: PropTypes.string.isRequired,
    wins: PropTypes.number.isRequired
  })).isRequired,
  title: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string
};

export default BarChart;
