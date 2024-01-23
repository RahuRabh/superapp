import React, { useState } from "react";
import img1 from "../../assets/images/registerimg.svg";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setformData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    ischecked: false,
  });

  const [nameError, setnameError] = useState(false);
  const [error, seterror] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleForm = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    let isvalid = true;
    event.preventDefault();

    // if (!formData.name.trim().length) {
    //   isvalid = false;
    //   setnameError(true);
    //   seterror({ ...error, name: "Name is required" });
    // }
    // if (!formData.username.trim().length) {
    //   setnameError(true);
    //   isvalid = false;
    //   seterror({ ...error, name: "UserName is required" });
    // }
    // if (!formData.email.trim().length) {
    //   setnameError(true);
    //   isvalid = false;
    //   seterror({ ...error, email: "Email is required" });
    // }
    // if (!formData.mobile.trim().length) {
    //   setnameError(true);
    //   isvalid = false;
    //   seterror({ ...error, mobile: "Mobile is required" });
    // }
    // if (!formData.ischecked) {
    //   setnameError(true);
    //   isvalid = false;
    //   seterror({ ...error, name: "Needs to be checked" });
    // }

    if (isvalid) {
      localStorage.setItem("userData", formData);
      navigate("/genre");
    }
  };

  return (
    <div className="flex">
      <div className="left bg-black relative w-6/12">
        <img className="h-[950px]" src={img1} alt="register"></img>
        <h1 className="absolute font-black text-white text-6xl leading-[78px] tracking-tight top-[700px] right-[70px] w-full text-center z-10">
          Discover new things on Superapp
        </h1>
      </div>

      <div className="right bg-black w-6/12">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[518px]">
            <img className="mt-20 w-[240px] h-24 mx-32" src={logo} alt="logo" />
            {/* <h1 className="text-[#72DB73] text-center font-normal text-6xl mt-20 font-family-singleDay">Super app</h1> */}
            <p className="text-white mt-10 text-center text-2xl">
              Create your new account
            </p>

            <form className="flex flex-col items-center justify-center">
              <input
                type="text"
                className="bg-[#292929] text-white w-full h-16 rounded-[4px] p-4 mt-12"
                placeholder="Name"
                required
                name="name"
                onChange={(event) => handleForm(event)}
              />
              {error.name ? (
                <p className="text-[#FF0000]">Field is required</p>
              ) : (
                <></>
              )}

              <input
                type="text"
                className="bg-[#292929] text-white w-full h-16 rounded-[4px] p-4 mt-4"
                placeholder="UserName"
                required
                name="username"
                onChange={(event) => handleForm(event)}
              />
              {error.username ? (
                <p className="text-[#FF0000]">Field is required</p>
              ) : (
                <></>
              )}

              <input
                type="email"
                className="bg-[#292929] text-white w-full h-16 rounded-[4px] p-4 mt-4"
                placeholder="Email"
                required
                name="email"
                onChange={(event) => handleForm(event)}
              />
              {error.email ? <p>{error.email} is required</p> : <></>}

              <input
                type="text"
                className="bg-[#292929] text-white w-full h-16 rounded-[4px] p-4 mt-4 appearance-none"
                placeholder="Mobile"
                name="mobile"
                required
                onChange={(event) => handleForm(event)}
              />
              {error.mobile ? <p>Field is required</p> : <></>}

              <div className="flex mt-8 w-full">
                
                <label className="text-white mx-1" htmlFor="check">
                <input onChange={(e) =>
                    setformData({
                      ...formData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                  className="mx-1"
                  type="checkbox"
                  name="check"
                  id="check"

                />
                  Share my registration data with Superapp 
                </label>
                {error.ischecked ? (
                  <p>Please tick this</p>
                ) : (<></>
                )}
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-[#72DB73] text-white w-full h-16 p-3 mt-10 rounded-[28px] text-3xl font-semibold"
              >
                SIGN UP
              </button>
            </form>

            <div className="w-full">
              <p className="text-[#7C7C7C] text-lg font-medium mt-5">
                By clicking on Sign up. you agree to Superapp{" "}
                <span className="text-[#72DB73]">
                  Terms and Conditional of Use
                </span>
              </p>
              <p className="text-[#7C7C7C] text-lg font-medium mt-5">
                To learn more above how Superapp collects, uses, shares and
                protect your personal data please head Superapp{" "}
                <span className="text-[#72DB73]">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;