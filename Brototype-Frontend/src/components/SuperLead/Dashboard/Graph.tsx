
import ReactApexChart from 'react-apexcharts'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,

} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
)


import { Bar } from 'react-chartjs-2'

const Graph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'students',
        data: [-13, -18, -9, -14, -5, -17,-15],
        backgroundColor: '#03c3ec',
        borderRadius:20, // Set border radius for rounded corners
        borderSkipped: false,
        borderWidth: 2,
        borderColor: 'white'
      },
      
      {
        label: 'Placed',
        data: [18, 7, 15, 29, 18, 12, 9],
        backgroundColor: '#8082FF',
        borderRadius: 20,
        borderSkipped: false,
        borderWidth: 2,
        borderColor: 'white'
      },
     
      
    ],
  };;

  const options = {
    barPercentage: 0.2,
    borderRadius: {
      topLeft: 10,
      bottomLeft: 10,
      topRight: 10,
      bottomRight: 10

    },
    
    scales: {
      x: {
        stacked: true, // Enable stacking for the x-axis

        grid: {
          display: false,

        },
        border: {
          display: false
        }
      },
      y: {
        stacked: true,

        grid: {
          display: false,

        },
        border: {
          display: false
        }
      },



    },
  
  }


  return (

    <>
      <div className=" m-4 mt-0  mr-0 ">

        <Bar data={data} options={options} height={120} />
      </div>
    </>


  )
};



export default Graph