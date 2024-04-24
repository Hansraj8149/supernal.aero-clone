'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    Filler
  } from "chart.js";
  import { useEffect, useState } from "react";
  import { Line } from "react-chartjs-2";
  
  // Register ChartJS components using ChartJS.register
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
  );
  
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.heatfleet.com/api/company/account/pricehistory",
        {
          headers: {
            "X-Api-Key": "oiwe43raiasdl4kha6sdf123",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return null;
    }
  }
  
  const LineChart = () => {
    const [size,setSize] =useState(0);
    const [priceData, setPricesData] = useState<any>([]);
    const emptyArray = new Array(size).fill('')
   
    useEffect(() => {
      fetchData().then((data) => setPricesData(data));
       fetchData().then((data)=> setSize(data.length))
    }, []);
    
  
    const data = {
        data: {
            labels: emptyArray.map(
                (priceData: any) => {
                return priceData
                }
              ),
      datasets: [
        {
          label: "Price (USD)",
          data: priceData.map((entry: any) => entry.price),
          fill: true,
          backgroundColor: "#f6fcff", // Set background color for the chart
          borderColor: "#60bfff",
          borderWidth: 2,
          pointHoverBackgroundColor:'#60bfff',
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          lineTension: 0.5,
          pointBackgroundColor:'#60bfff'
        },
      ],
    },
    options: {
        responsive: true,
          cornerRadius:19,
        scales: {
            y:{
                grid:{
                    display:false
                }
            },
            x: {
                grid: {
                    display:false
                }
            }
        },
     
        
    }
}
  
    return (
      <div>
        {!priceData && (
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
          </div>
        )}
        <div >
          <Line data={data.data} options={data.options} />
        </div>
      </div>
    );
  };
  
  export default LineChart;
  