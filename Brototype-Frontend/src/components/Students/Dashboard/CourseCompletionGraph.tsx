
import { useEffect } from "react";
const CourseCompletionGraph = () => {
    useEffect(() => {
        // Chart options and configuration
        const options = {
            series: [67],
            chart: {
                height: 230,
                type: 'radialBar',
                offsetY: -5,
                // offsetX: -50,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '13px',
                            color: '#715DA6',
                            formatter: function (val: string) {
                                return val + '%';
                            },
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                    colorStops: [{
                        offset: 0,
                        color: '#715DA6' // Set the color to red (#FF0000)
                    }]
                },
            },
            stroke: {
                dashArray: 1,
            },
            labels: ['']

        };

        // Initialize and render the chart
        const chart = new ApexCharts(document.querySelector('#chart'), options);
        chart.render();

        // Cleanup the chart on component unmount
        return () => {
            chart.destroy();
        };
    }, []); // Empty dependency array ensures that this effect runs only once on mount
    return (



        <div className="w-22.5rem h-auto bg-white right-6 mb-48rem mt-20.6rem rounded-xl shadow-xl border border-gray-300 hover hover:border-2 border-gray-300 absolute">
            <div id="chart">
            </div>

            <h1 className="text-sm font-roboto ml-28 ">Course Completion Ratio</h1>
        </div>

    );
}

export default CourseCompletionGraph;
