import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import './BarChart.scss';

class BarChart extends Component {
    render() {

        const options = {
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    barPercentage: 0.4,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false //this will remove only the label
                    }

                }],
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 1000,
                        stepSize: 200
                    },
                    gridLines: {
                        drawBorder: false,
                    },
                }]

            }

        }
        const data = {
            labels: ['1', '2', '3', '4', '5', '6'],

            datasets: [
                {
                    backgroundColor: ['#595959', '#737373', '#808080', '#a6a6a6', '#cccccc', '#e6e6e6'],
                    data: [900, 750, 650, 550, 450, 350]
                }
            ]
        };

        return (
            <div className="h-100">
                <div className="h-12">3,1600 Documents</div>
                <div className="d-flex border-bar align-items-center">
                    <Chart type="bar" data={data} options={options} className="h-88" />

                </div>
            </div>
        );
    }
}

export default BarChart;