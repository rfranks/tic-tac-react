import React, {useEffect, useRef} from 'react'
import {select} from 'd3-selection'
import {max} from 'd3-array'
import {scaleLinear, scaleBand} from 'd3-scale'
import {axisLeft, axisBottom} from 'd3-axis'
import './BarChart.css';

const BarChart = ({data, title, x, y}) => {
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
            const xMax = max(data, d => d[x]);

            const xScale = scaleLinear()
                .domain([0, xMax])
                .range([0, width]);

            const yScale = scaleBand()
                .domain(data.map(d => d[y]))
                .range([0, height])
                .paddingInner(0.25);

            // append group translated to chart area
            svg = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

            // draw header
            title &&
            svg
                .append('g')
                .attr('class', 'bar-header')
                .attr('transform', `translate(0, ${-margin.top / 2})`)
                .append('text')
                .append('tspan')
                .text(title)

            // draw bars
            svg
                .selectAll('.bar')
                .data(data)
                .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('y', d => yScale(d[y]))
                .attr('width', d => xScale(d[x]))
                .attr('height', yScale.bandwidth())
                .style('fill', function (d, i) {
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
                .call(yAxis)
        }
    }, [data, color, height, margin.bottom, margin.left, margin.top, title, width, x, y]);

    return (
        <svg
            className="bar-chart-container"
            width={width + margin.left + margin.right}
            height={height + margin.top + margin.bottom}
            role="img"
            ref={d3svg}
        ></svg>
    );
}

export default BarChart