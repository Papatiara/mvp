import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class EmotionGraph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          click: false,
       }
    }
    
  render () {
    const data = [
      {name: 'Anger', uv: 4000, pv: Math.round(Number(this.props.data.anger) * 100), amt: 2400},
      {name: 'Fear', uv: 3000, pv: Math.round(Number(this.props.data.fear) * 100), amt: 2210},
      {name: 'Joy', uv: 2000, pv: Math.round(Number(this.props.data.joy) * 100), amt: 2290},
      {name: 'Sadness', uv: 2780, pv: Math.round(Number(this.props.data.sadness) * 100), amt: 2000},
      {name: 'Surprise', uv: 1890, pv: Math.round(Number(this.props.data.surprise) * 100), amt: 2181},
    ];
        return (
        <BarChart 
        width={600} 
        height={300} 
        data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <CartesianGrid
         strokeDasharray="3 3"/>
         <XAxis
         dataKey="name"/>
         <YAxis/>
         <Tooltip
         content={8}/>
         {/* <Legend /> */}
         <Bar
         dataKey="pv"
         barSize={20}
         fill="#92ccfc" />
        </BarChart>
      );
    }
}
export default EmotionGraph;