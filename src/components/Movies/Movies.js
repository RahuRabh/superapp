import logo from "../../assets/images/logo.svg"
import dp from "../../assets/images/dp.png"

export default function Movies() {
  return (
    <div className="bg-black w-full h-[1000px]">
      <div className="flex justify-between p-10">
        <img src={logo} alt="logo" className="w-40 h-16" />
        <img src={dp} alt="dp" className="w-20 h-20"/>
      </div>
      <h1 className="text-white text-3xl font-semibold leading-10 ml-16">Entertainment according to your choice</h1>
      <div className="flex flex-col m-14">
      <h1 className="text-[#878787] font-medium text-3xl leading-10">Action</h1>
      <div className="grid grid-cols-4">
      </div>
      </div>
    </div>
  );
}
