import React, { useEffect, useState } from "react";
import userimg from "../../assets/images/user.png";
import rain from "../../assets/icons/rain.png";
import temp from "../../assets/icons/temp.png";
import wind from "../../assets/icons/wind.png";
import humidity from "../../assets/icons/humidity.png";
import line from "../../assets/icons/Line.png";

export default function Home() {
  const [info, setInfo] = useState([]);
  const [news, setNews] = useState([])
  const [currentNewsIndex, CurrentNewsIndex] = useState(0)

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

  useEffect(() => {
    const fetchNews = async () =>{
      const response = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8147fd8473f446d8b604f2ed4d6bb5a")
      const newsData = await response.json();
      setNews(newsData)
    }
    fetchNews()
  }, [])

  console.log(news);

  useEffect(() => {
    if(news){
      const interval = setInterval(() => {
        CurrentNewsIndex((currentNewsIndex + 1) % news.articles.length)
      }, 30000)

      return () => clearInterval(interval)
    }
  }, [news, currentNewsIndex])

  const formateDandT = (string) => {
    const date = new Date(string)
    const options = {
      month: "2-digit",
      day:"2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <div className="flex bg-black">
      <div className="left w-[900px] ml-20">
        <div className="left-content flex h-[550px] m-10 bg-[#5746EA] rounded-[33px]">
          <div className="m-5">
            <img src={userimg} alt="UserImage" className="w-52 h-[450px]" />
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
      <div className="right w-[500px] h-[890px] ml-24 mt-10 flex flex-col rounded-2xl overflow-auto">
        {news.articles &&
        <div className="flex flex-col rounded-2xl">
        <div className="w-full h-[600px] relative">
          <img src={news.articles[currentNewsIndex].urlToImage}
           className="w-full h-full"
          />
          <div className="absolute bottom-0 bg-black z-1 opacity-70 w-full h-[250px]">
          <h3 className="text-white font-medium text-3xl leading-9 tracking-wide px-6 pt-4">{news.articles[currentNewsIndex].title}</h3>
          <h3 className="text-white font-semibold text-xl leading-5 pt-4 px-6">{formateDandT(news.articles[currentNewsIndex].publishedAt)}</h3>
        </div>
        </div>
        <div className="h-[350px] bg-white">
        <h5 className="text-black text-xl leading-8 tracking-wide p-6">{news.articles[currentNewsIndex].content}</h5>
        </div>
        </div>
        }
    </div>
    </div>
  );
}