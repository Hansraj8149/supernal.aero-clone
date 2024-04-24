'use client' 

import { useState,useEffect } from "react";


async function fetchData() {
  try {
    const response = await fetch('https://api.heatfleet.com/api/customer/offer/get-nearest-location', {
      headers: {
        'X-Api-Key': 'oiwe43raiasdl4kha6sdf123'
      }
    });
    if(!response.ok) {
      throw new Error('failed to fetch data');

    }
    const data = await response.json();
    // console.log(data.nearestTown);
    return data.nearestTown;
  
  }catch(error) {
    console.log('Error fetching data:', error)
    return null
  }
}
export default function ScrollingText() {
  const [textData, setTextData] = useState<any>([]);
  useEffect(() => {
    fetchData().then(data => setTextData(data));
    // console.log(textData)
  }, [textData]);


    return (
      <div className="relative overflow-hidden bg-[#60bfff] whitespace-nowrap h-20 md:h-28 lg:h-36 ">
        <div className="text-slide animate-slide h-full w-full font-bold text-2xl md:text-4xl lg:text-6xl hover:[animation-play-state:paused] flex items-center justify-center cursor-pointer">
  {textData && textData.map((data:any)=> (
 <div key={data.state_name} className="flex gap-0 ml-5" >
  <span>
    {data.state_name}
  </span>
  <span>
   {`:$${data.price }`}
  </span>
 </div>
  ))}
    {textData && textData.map((data:any)=> (
 <div key={data.state_name} className="flex gap-0 ml-5" >
  <span>
    {data.state_name}
  </span>
  <span>
   {`:$${data.price }`}
  </span>
 </div>
  ))}
       
        </div>
      </div>
    );
  }
  