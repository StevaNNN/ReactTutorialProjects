import React from "react";
import ChartBar from "./ChartBar/ChartBar";
import './Chart.css';

const Chart = props => {

    const valueArray = props.data.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...valueArray);

    let render = props.data.map((dataPoint, idx) => {
        return(
            <ChartBar
                key={idx}
                value={dataPoint.value}
                maxValue={totalMax}
                label={dataPoint.label}
            />
        )
    })

    return<div className={'chart'}>{render}</div>
}

export default Chart