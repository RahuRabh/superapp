import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import minimum from "../../assets/icons/minimum.png";
import { genre } from "../../genre";
import { useNavigate } from "react-router-dom";

const Genre = () => {

  const navigate = useNavigate()
  const [category, setcategory] = useState([]);

  const handleClick = (items) => {
      setcategory((prevCategory) => [...prevCategory, items.id]);
  };

  const handlebutton = () => {
    if (category.length > 3){
      localStorage.setItem("selectedCategory", JSON.stringify(category));
      const selectedCategory = JSON.parse(localStorage.getItem("selectedCategory"));
      console.log(selectedCategory);
      navigate("/home");
    }
  }

  return (
    <div
      className="flex h-screen bg-black"
      style={{ justifyContent: "space-between" }}
    >
      <div className="right flex flex-col mt-28 mx-20">
        <img src={logo} className="w-[250px] h-[99px]" />
        <h1 className="text-white font-bold text-6xl w-[500px] h-[300px] leading-tight mt-10">
          Choose your entertainment category
        </h1>
        <div className="grid grid-cols-2 gap-y-5 h-12">
          {category.map((title) => {
            return (
              <p className="bg-[#148A08] text-white p-3 rounded-[30px] w-[150px] ">
                {title}
                <span
                  onClick={() => {
                    setcategory((prevCategory) =>
                      prevCategory.filter((item) => item !== title)
                    );
                  }}
                  className="mx-10 cursor-pointer text-[#085C00]"
                >
                  X
                </span>
              </p>
            );
          })}
        </div>
        <div className="flex mt-24 gap-10 absolute bottom-10 left-[80px]">
          <img src={minimum} className="w-7 h-7" />
          <p className="text-[#FF0000]">Minimum 3 category required</p>
        </div>
      </div>

      <div className="left min-h-max ">
        <div
          className="grid grid-cols-3 gap-8 mt-20 mx-28"
          style={{ padding: "10px" }}
        >
          {genre.map((item, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    handleClick(item);
                  }}
                  className={`bg-${item.color} rounded-md w-52 h-52`}
                >
                  <h3 className="text-white text-4xl font-medium leading-10 p-3">
                    {item.id}
                  </h3>
                  {item.image}
                </div>
              </>
            );
          })}
        </div>
        <button onClick={handlebutton} className="bg-[#148A08] w-48 h-14 text-white text-center font-medium text-2xl rounded-[38px] absolute bottom-10 right-[120px]">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Genre;