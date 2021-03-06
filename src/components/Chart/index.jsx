import React, { Component } from 'react';

import {
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  Tooltip,
} from 'recharts';

import './chart.less';

class Chart extends Component {
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <div className="chart">
        <h2 className="chart-title">各项电影得票图</h2>
        <ResponsiveContainer width="100%" height={380}>
          <LineChart data={data}
            margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />

            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              label={{ fill: '#808080', fontSize: '.3rem' }}
              animationBegin={0}
              animationDuration={500}
              strokeWidth={2}
              type="linear"
              dataKey="num"
              name="投票数"
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>

        <h2 className="chart-title">各项电影得票图</h2>
        <ResponsiveContainer width="100%" height={380}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="num"
              name="投票数"
              fill="#8884d8"
              label={{ fill: '#fff', fontSize: '.3rem' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}


export default Chart;
