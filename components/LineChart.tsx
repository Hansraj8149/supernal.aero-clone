'use client'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    Filler,
    scales
  } from "chart.js";
  import { useEffect, useState } from "react";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    scales,
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
      console.log(data)
      return data;
    } catch (error) {
      console.log("Error fetching data:", error);
      return null;
    }
  }




  
  const LineChart = () => {
    const [priceData, setPricesData] = useState<any>([]);
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(() => {
      fetchData().then((data) => setPricesData(data));
    }, []);

    useEffect(() => {
      function handleResize() {
          setWindowSize(window.innerWidth);
      }
    
      window.addEventListener('resize', handleResize);
    
      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }, []);
    function createLineGraph() {
      return <Line key={windowSize} data={data.data} options={data.options}   />;
    }
       
    
  const data:any = {
    data: {
        labels: priceData.map(
            (priceData: any) => {
              const date = new Date(priceData.date);
              return date.toLocaleDateString('en-US', { month: 'short' , day:'numeric', year:'numeric'});
            }
          ),
  datasets: [
    {
      label: `Heating Oil Average(USD)`,
      data: priceData.map((data:any) => {
        return data.price

      }),
      fill: true,
      backgroundColor: "#f6fcff",
      borderColor: "#60bfff",
      borderWidth: 2,
      pointHoverBackgroundColor:'#60bfff',
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointBackgroundColor:'#60bfff'
    },
  ],
},
options: {
  tension:0.4,

    responsive: true,
      cornerRadius:19,

      events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
      interaction: {
        intersect:false,
        mode: "nearest"
     },
     plugins: {
      tooltip: {
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']
      },
      legend: {
        display: false,
        
      },
    },
    scales: {

      
        y:{
          border: {
            display:false
          },
          ticks: {
            display: false,
            beginAtZero: true,
          },
            grid:{
                display:false,
                drawBorder: false,
                drawOnChartArea:false,
            },
          
        },
        x: {
          border: {
            display:false
          },
            grid: {
                display:false,
                drawBorder: false,
                drawOnChartArea:false,

            },

            ticks: {
              display: false,
              beginAtZero: true,
             
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
         {createLineGraph()}
        </div>
      </div>
    );
  };
  
  export default LineChart;
  