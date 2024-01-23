import React, { useEffect, useState } from "react";
import userimg from "../../assets/images/user.png";
import rain from "../../assets/icons/rain.png";
import temp from "../../assets/icons/temp.png";
import wind from "../../assets/icons/wind.png";
import humidity from "../../assets/icons/humidity.png";
import line from "../../assets/icons/Line.png";
export default function Home() {
  const [info, setInfo] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const Category = JSON.parse(localStorage.getItem("selectedCategory"));

  const apikey = "437bde48dfbc44d491580708242301";
  const location = "28.644800,77.216721"; // London, UK

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`)
      const data = await response.json();
      setInfo(data)
    }
    fetchData()
  }, []);

  return (
    <div className="flex bg-black">
      <div className="left w-[900px] ml-20">
        <div className="left-content flex h-[550px] m-10 bg-[#5746EA] rounded-[33px]">
          <div className="m-5">
            <img src={userimg} alt="kdjk" className="w-52 h-[450px]" />
          </div>
          <div className="m-14">
            <h1 className="text-white text-4xl leading-9 tracking-wide">
              {userData.name}
            </h1>
            <h1 className="text-white text-4xl leading-9 tracking-wide mt-5">
              {userData.email}
            </h1>
            <h1 className="text-white text-4xl leading-9 tracking-wide mt-5">
              {userData.username}
            </h1>
            <div className="grid grid-cols-2 gap-5">
              {Category.map((items, index) => {
                return (
                  <p className="bg-[#9F94FF] w-52 h-14 mt-5 text-white text-center p-3 rounded-[36px]">
                    {items}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" flex flex-col h-[300px] bg-[#101744] m-10 rounded-[33px] overflow-auto">
          <div className="bg-[#FF4ADE] flex justify-around w-full h-24 ">
            <h1 className="text-5xl font-medium leading-[80px] tracking-tighter text-white">
              {new Date(info.location?.localtime).toLocaleDateString()}
            </h1>
            <h1 className="text-5xl font-medium leading-[80px] tracking-tighter text-white">
              {new Date(info.location?.localtime).toLocaleTimeString()}
            </h1>
          </div>

          <div className="flex mt-10 justify-around">
            <div>
              <img src={rain} className="w-24 h-24"></img>
              <p className="text-white text-center">
                {info.current?.condition?.text}
              </p>
            </div>
            <img src={line} />
            <div>
              <h1 className="text-white text-7xl text-center">
                {info.current?.temp_c}°C
              </h1>
              <div className="flex mt-5">
                <img src={temp} className="w-5 h-8 mr-5"></img>
                <p className="text-white">
                  {info.current?.pressure_mb} mbar Pressure
                </p>
              </div>
            </div>
            <img src={line} />
            <div className="flex flex-col ">
              <div className="flex ">
                <img src={wind} className="w-11 h-9 mr-5"></img>
                <p className="text-white ">
                  {info.current?.wind_kph} km/h Wind
                </p>
              </div>
              <div className="flex mt-5">
                <img src={humidity} className="w-6 h-9"></img>
                <p className="text-white ml-5">
                  {info.current?.humidity} Humidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[450px] h-[890px] ml-24 mt-10 bg-blue-400"></div>
    </div>
  );
}