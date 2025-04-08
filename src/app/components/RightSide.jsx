"use client";
export default function RightSide({
  selectedCity,
  temprature,
  situation,
  time,
  RightImages,
  getWeatherImage,
}) {
  return (
    <div className="w-[350px] h-[700px] bg-[#0F141E]  rounded-[48px] items-center justify-center backdrop-blur-md shadow-lg relative mt-[50px] ml-[700px]">
      <div>
        <div className="p-8">
          <div className="text-[18px] text-[#9CA3AF] font-medium">{time}</div>
          <div className="text-[48px] text-[#FFF] font-extrabold flex">
            {selectedCity}
            <img src="location.svg" alt="" className="mb-8" />
          </div>
          <div className="flex justify-center items-center">
            <img src={getWeatherImage(RightImages)} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="font-extrabold text-[#F9FAFB] text-[100px] ml-10">
          {temprature}
        </div>
        <div className="text-[#777CCE] text-[24px] font-extrabold ml-10">
          {situation}
        </div>
      </div>
      <div className="flex items-end justify-between p-8">
        <img src="Home.svg" alt="" />
        <img src="Pin.svg" alt="" />
        <img src="Heart.svg" alt="" />
        <img src="User.svg" alt="" />
      </div>
    </div>
  );
}
