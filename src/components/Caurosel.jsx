import caurosel1 from "../assets/caurosel1.png";
import caurosel3 from "../assets/caurosel3.png";
import caurosel2 from "../assets/caurosel2.png";
import rightArrow from "../assets/Right.png";
import { useState } from "react";
import rightArrowColor from "../assets/Right2.png";
function Caurosel() {
  const Slides = [
    {
      img: caurosel1,
      No: "01",
      Name: "Bedroom",
      content: "INNER PEACE",
    },
    {
      img: caurosel2,
      No: "02",
      Name: "Bedroom",
      content: "INNER PEACE",
    },
    {
      img: caurosel3,
      No: "03",
      Name: "Bedroom",
      content: "INNER PEACE",
    },
    {
      img: caurosel1,
      No: "04",
      Name: "Bedroom",
      content: "INNER PEACE",
    },
    {
      img: caurosel2,
      No: "05",
      Name: "Bedroom",
      content: "INNER PEACE",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="w-[850px] flex flex-row gap-[10px] relative overflow-hidden transition-transform duration-500">
        {Slides.map((slide, index) => (
          <div
            className="w-[404px] flex-shrink-0"
            key={index}
            style={{
              transform: `translateX(-${currentIndex * 414}px)`,
            }}
          >
            <div
              className={`relative
                ${
                  currentIndex === index
                    ? "w-[404px] h-[582px]"
                    : "w-[372px] h-[486px]"
                }
              `}
            >
              <img
                className="w-full h-full object-cover"
                src={slide.img}
                alt=""
              />
              <div className="absolute bottom-5 left-5 flex flex-row items-end">
                <div className="w-[217px] h-[130px] bg-white/80 flex flex-col justify-center items-start p-5">
                  <div className="flex flex-row justify-center items-center gap-[10px]">
                    <div className="">{slide.No}</div>
                    <div className="flex justify-center items-center">
                      {" "}
                      <div className="h-[3px] w-[20px] bg-black"></div>
                    </div>
                    <div className="text-[16px] font-poppins font-medium">
                      {slide.Name}
                    </div>
                  </div>
                  <div className="text-[28px] font-poppins font-semibold">
                    {slide.content}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % Slides.length)
                  }
                  className={`h-[48px] w-[48px] bg-[#B88E2F] flex justify-center items-center ${currentIndex != index ? "hidden" : ""}`}
                >
                  <img src={rightArrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          className="absolute h-[48px] w-[48px] rounded-full  right-0 top-50 bg-[#FFFF] flex justify-center items-center shadow-2xl"
          onClick={() => setCurrentIndex((currentIndex + 1) % Slides.length)}
        >
          {" "}
          <img src={rightArrowColor} alt="" />{" "}
        </button>

        <div className="flex flex-row absolute right-60 bottom-0 gap-4">
          <div
            className={`${currentIndex == 0 ? "border-1 border-[#B88E2F]" : " "} h-[20px] w-[20px] rounded-full flex justify-center items-center`}
          >
            {" "}
            <div
              className={`${currentIndex == 0 ? "bg-[#B88E2F]" : "bg-gray-500"}  h-[10px] w-[10px] rounded-full `}
            ></div>
          </div>
          <div
            className={`${currentIndex == 1 ? "border-1 border-[#B88E2F]" : " "} h-[20px] w-[20px] rounded-full flex justify-center items-center`}
          >
            {" "}
            <div
              className={`${currentIndex == 1 ? "bg-[#B88E2F]" : "bg-gray-500"}  h-[10px] w-[10px] rounded-full `}
            ></div>
          </div>
          <div
            className={`${currentIndex == 2 ? "border-1 border-[#B88E2F]" : " "} h-[20px] w-[20px] rounded-full flex justify-center items-center`}
          >
            {" "}
            <div
              className={`${currentIndex == 2 ? "bg-[#B88E2F]" : "bg-gray-500"}  h-[10px] w-[10px] rounded-full `}
            ></div>
          </div>
          <div
            className={`${currentIndex == 3 ? "border-1 border-[#B88E2F]" : " "} h-[20px] w-[20px] rounded-full flex justify-center items-center`}
          >
            {" "}
            <div
              className={`${currentIndex == 3 ? "bg-[#B88E2F]" : "bg-gray-500"}  h-[10px] w-[10px] rounded-full `}
            ></div>
          </div>
          <div
            className={`${currentIndex == 4 ? "border-1 border-[#B88E2F]" : " "} h-[20px] w-[20px] rounded-full flex justify-center items-center`}
          >
            {" "}
            <div
              className={`${currentIndex == 4 ? "bg-[#B88E2F]" : "bg-gray-500"}  h-[10px] w-[10px] rounded-full `}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Caurosel;
