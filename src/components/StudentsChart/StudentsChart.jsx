import React,{use} from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const StudentsChart = ({studentsDataPromiss}) => {
    const studentsDataObj=use(studentsDataPromiss)
        const studentsData=studentsDataObj.data
    return (
        <div>
            <LineChart width={800} height={600} data={studentsData}>
                <CartesianGrid/>
            <Line dataKey='math'></Line>
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Legend/>
            </LineChart>
        </div>
    );
};

export default StudentsChart;