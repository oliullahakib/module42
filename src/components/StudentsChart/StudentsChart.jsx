import React,{use} from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const StudentsChart = ({studentsDataPromiss}) => {
    const studentsDataObj=use(studentsDataPromiss)
        const studentsData=studentsDataObj.data
    return (
        <div>
            <LineChart width={800} height={600} data={studentsData}>
             <CartesianGrid/>
            <Line dataKey='math'></Line>
            <Line dataKey='physics' stroke='red'></Line>
            <Line dataKey='biology' stroke='green'></Line>
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Legend/>
            <Tooltip/>
            </LineChart>
        </div>
    );
};

export default StudentsChart;