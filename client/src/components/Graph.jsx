import React from 'react';
import {PieChart, Pie, Cell, Legend} from 'recharts';

class Graph extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          click: false,
       }
    }
    
  render () {
    const COLORS = ['#0088FE', '#FF6347'];

    const data1= [{name: 'Positivity', value: this.props.indico}, {name: 'Negativity', value: 100 - this.props.indico}];
    return (
      <div className="chart">
      <PieChart
       width={800} 
       height={400}
      >
       <Pie        
        dataKey='value'
        data={data1} 
        cx={200} 
        cy={200} 
        startAngle={180}
        endAngle={0}
        innerRadius={70} 
        outerRadius={90} 
        fill= '#0088FE'
        label= {true}
        paddingAngle={5}  >
        {data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={entry}/>)}
        </Pie>
        <Legend />
     </PieChart>
     </div>
    );
  }
}
export default Graph;