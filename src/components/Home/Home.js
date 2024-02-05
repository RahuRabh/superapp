import React, { useEffect, useState } from "react";
import userimg from "../../assets/images/user.png";
import rain from "../../assets/icons/rain.png";
import temp from "../../assets/icons/temp.png";
import wind from "../../assets/icons/wind.png";
import humidity from "../../assets/icons/humidity.png";
import line from "../../assets/icons/Line.png";

export default function Home() {
  const [info, setInfo] = useState([]);
  const [news, setNews] = useState([]);
  const [currentNewsIndex, CurrentNewsIndex] = useState(0);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const Category = JSON.parse(localStorage.getItem("selectedCategory"));

  const apikey = "437bde48dfbc44d491580708242301";
  const location = "28.644800,77.216721"; // London, UK

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${location}`
      );
      const data = await response.json();
      setInfo(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f8147fd8473f446d8b604f2ed4d6bb5a"
      );
      const newsData = await response.json();
      setNews(newsData);
    };
    fetchNews();
  }, []);

  console.log(news);

  useEffect(() => {
    if (news) {
      const interval = setInterval(() => {
        CurrentNewsIndex((currentNewsIndex + 1) % news.articles.length);
      }, 30000);

      return () => clearInterval(interval);
    }
  }, [news, currentNewsIndex]);

  const formateDandT = (string) => {
    const date = new Date(string);
    const options = {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex bg-black">
      <div className="left w-[510px] ml-10">
        <div className="left-content flex h-80 m-10 bg-[#5746EA] rounded-[19px]">
          <div className="my-7 ml-5">
            <img src={userimg} alt="UserImage" className="w-36 h-[270px]" />
          </div>
          <div className="mt-10 ml-5">
            <h1 className="text-white text-xl leading-3 tracking-wide">
              {userData.name}
            </h1>
            <h1 className="text-white text-xl leading-3 tracking-wide mt-5">
              {userData.email}
            </h1>
            <h1 className="text-white text-4xl font-medium leading-5 tracking-wide mt-5">
              {userData.username}
            </h1>
            <div className="grid grid-cols-2 gap-x-5">
              {Category.map((items, index) => {
                return (
                  <p className="bg-[#9F94FF] w-[100px] h-9 mt-5 text-white text-center p-2 rounded-[21px]">
                    {items}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="date&time flex flex-col w-[435px] h-[185px] bg-[#101744] ml-10 rounded-[19px] overflow-auto">
          <div className="bg-[#FF4ADE] flex justify-around h-14">
            <h1 className="text-[33px] font-semibold text-white">
              {new Date(info.location?.localtime).toLocaleDateString()}
            </h1>
            <h1 className="text-[33px] font-semibold text-white">
              {new Date(info.location?.localtime).toLocaleTimeString()}
            </h1>
          </div>

          <div className="flex mt-3 justify-around">
            <div>
              <img alt="rain" src={rain} className="w-[62px] h-14 mt-2"></img>
              <p className="text-white text-center">
                {info.current?.condition?.text}
              </p>
            </div>
            <img src={line} alt="line" className="h-14 mt-4 mx-2" />
            <div>
              <h1 className="text-white text-[40px] text-center">
                {info.current?.temp_c}°C
              </h1>
              <div className="flex">
                <img src={temp} alt="temp" className="w-3 h-5 mr-2"></img>
                <p className="text-white">
                  {info.current?.pressure_mb} mbar <br />
                  Pressure
                </p>
              </div>
            </div>
            <img src={line} alt="line" className="h-14 mt-4 mx-2" />
            <div className="flex flex-col ">
              <div className="flex mt-2">
                <img src={wind} alt="wind" className="w-6 h-5 mr-3 mt-1"></img>
                <p className="text-white ">
                  {info.current?.wind_kph} km/h <br />
                  Wind
                </p>
              </div>
              <div className="flex mt-2">
                <img src={humidity} alt="humid" className="w-3 h-5"></img>
                <p className="text-white ml-5">
                  {info.current?.humidity} % <br />
                  Humidity
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="timer w-[1005px] h-[310px] bg-[#1E2343] rounded-[19px] ml-10 mt-10 mb-20"></div>
      </div>
      <div className="note w-[470px] h-[535px] bg-[#F1C75B] rounded-[19px] mt-10 ml-14">
        <p className="font-semibold text-4xl m-10">All Notes</p>
        <p className="text-xl ml-10 overflow-auto">
          This is how I am going to learn MERN Stack in next 3 months
        </p>
      </div>
      <div className="right w-[500px] h-[890px] ml-24 mt-10 flex flex-col rounded-2xl overflow-hidden">
        {news.articles && (
          <div className="flex flex-col rounded-2xl">
            <div className="w-full h-[600px] relative">
              <img
                alt="news"
                src={news.articles[currentNewsIndex].urlToImage}
                className="w-full h-full"
              />
              <div className="absolute bottom-0 bg-black z-1 opacity-70 w-full h-[200px]">
                <h3 className="text-white font-medium text-3xl leading-9 tracking-wide px-6 pt-4">
                  {news.articles[currentNewsIndex].title}
                </h3>
                <h3 className="text-white font-semibold text-xl leading-5 pt-4 px-6">
                  {formateDandT(news.articles[currentNewsIndex].publishedAt)}
                </h3>
              </div>
            </div>
            <div className="h-[350px] bg-white">
              <h5 className="text-black text-xl leading-8 tracking-wide p-6">
                {news.articles[currentNewsIndex].content}
              </h5>
            </div>
          </div>
        )}
      </div>
      <button
        onClick={() => {}}
        className="bg-[#148A08] w-48 h-14 text-white text-center font-medium text-2xl rounded-[38px] bottom-[-60px] mb-5 absolute right-[40px]"
      >Browse</button>
    </div>
  );
}
