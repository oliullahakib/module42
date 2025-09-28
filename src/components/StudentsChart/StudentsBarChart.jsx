import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const StudentsBarChart = ({studentsDataPromiss}) => {
    const studentsDataObj = use(studentsDataPromiss)
    const studentsData =studentsDataObj.data
    return (
        <div>
            <h1 className='text-center text-2xl my-3'>Bart Chart for Students Mark</h1>
            <BarChart width={800} height={500} data={studentsData}>
            <CartesianGrid/>
            <Bar dataKey={"math"} stroke='blue' fill='blue'/>
            <Bar dataKey={"biology"} stroke='green' fill='green'/>
            <Bar dataKey={"physics"} stroke='red' fill='red'/>
            <XAxis dataKey={"name"}/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            </BarChart>
        </div>
    );
};

export default StudentsBarChart;