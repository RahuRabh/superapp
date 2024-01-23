import React from "react";
import userimg from "../../assets/images/user.png";
export default function Home() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const Category = JSON.parse(localStorage.getItem("selectedCategory"));

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
            {Category.map((items, index) =>{
              return (
                <p className="bg-[#9F94FF] w-52 h-14 mt-5 text-white text-center p-3 rounded-[36px]">
                {items}
              </p>
              )
            })}
            </div>
          </div>
        </div>
        <div className="h-[300px] bg-[#101744] m-10">

        </div>
      </div>
      <div className="right w-[450px] h-[890px] ml-24 mt-10 bg-blue-400"></div>
    </div>
  );
}