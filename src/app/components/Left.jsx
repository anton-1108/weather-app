"use client";
export default function LeftSide({
  selectedCity,
  max,
  situation,
  time,
  LeftImages,
  getWeatherImage,
}) {
  return (
    <div className="w-[350px] h-[700px] bg-white shadow-lg rounded-[48px] backdrop-blur-md  justify-center items-center m-auto">
      <div className="p-8">
        <div>
          <div className="text-[18px] text-[#9CA3AF] font-medium">{time}</div>
          <div className="text-[48px] text-[#111827] font-extrabold flex gap-2">
            {selectedCity}
            <img src="location.svg" alt="" className="mb-8" />
          </div>
        </div>
        <div>
          <img
            src={getWeatherImage(LeftImages)}
            alt=""
            className="flex justify-center items-center"
          />
        </div>
      </div>
      <div>
        <div className="font-extrabold text-[#111827] text-[100px] ml-10">
          {max}
        </div>
        <div className="text-[#FF8E27] text-[24px] font-extrabold ml-10">
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
