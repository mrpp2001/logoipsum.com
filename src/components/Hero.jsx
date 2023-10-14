import img1 from "../assets/picture-1.jpg";
import img2 from "../assets/picture-2.jpg";
import img3 from "../assets/picture-3.jpg";
import React, { useState } from "react";
import jsonData from "../../data.json";
import Profile from "./Profile";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(jsonData);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleSearch = () => {
    try {
      if (searchQuery.trim() !== "") {
        const filtered = jsonData.filter(
          (item) => item.name.toLowerCase() === searchQuery.trim().toLowerCase()
        );
        if (filtered.length > 0) {
          setFilteredData(filtered);
          setIsProfileVisible(true);
        } else {
          setIsProfileVisible(false);
        }
      } else {
        setIsProfileVisible(false);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      {!isProfileVisible && (
        <main className="flex relative justify-between gap-[62px] ">
          <div className="w-[610px] mt-[170px] ml-[128px] flex flex-col gap-[16px] mb-[110px]">
            <p className="text-black text-6xl font-bold leading-[80px]">
              Find{" "}
              <span
                className="text-6xl font-bold leading-none"
                style={{
                  color: "zinc",
                  background:
                    "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Partners{" "}
              </span>
              (CAs)
              <br />
              available online
            </p>

            <div className="w-96 h-14">
              <p
                className="font-light  w-[600px] text-[#616161] leading-[30px] "
                style={{
                  color: "zinc",
                }}
              >
                <span className="font-bold leading-none text-[#616161]">
                  CONNECT{" "}
                </span>
                with us where your services are listed and visible to a myriad
                of businesses seeking CA’s for compliance support
              </p>
            </div>

            <div className="mt-[44px] flex justify-between rounded-lg font-['Inter'] border-2 border-[#BFBFBF]">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[26rem] h-20 text-zinc-400 text-lg font-bold 
                bg-white rounded-l-lg pl-[30px] "
                type="text"
                placeholder="Search by name"
              />
              <button
                onClick={handleSearch}
                className=" text-white text-base font-bold 
             w-48 h-20 bg-sky-600 rounded-lg hover:bg-white hover:text-sky-600 hover:border-2 border-sky-600"
              >
                Search
              </button>
            </div>
          </div>

          <div className=" justify-start items-start gap-4 inline-flex mr-[40px] mt-[126px] mb-[105px] ">
            <div className="grow shrink basis-0 h-96 pt-20 justify-start items-start gap-2.5 flex">
              <img className="w-[200px] h-[400px] rounded-[21px]" src={img1} />
            </div>
            <div className="grow shrink basis-0 h-96 justify-start items-start gap-2.5 flex">
              <img className="w-[200px] h-[400px] rounded-[21px]" src={img2} />
            </div>
            <div className="grow shrink basis-0 h-96 pt-10 justify-start items-start gap-2.5 flex">
              <img className="w-[200px] h-[400px] rounded-[21px]" src={img3} />
            </div>
          </div>
          <svg
            className="absolute -z-10 bottom-0 right-0"
            xmlns="http://www.w3.org/2000/svg"
            width="1536"
            height="210"
            viewBox="0 0 1536 210"
            fill="none"
          >
            <path d="M0 210H1536V80.0669V0L0 192.622V210Z" fill="#FAFBFC" />
          </svg>
        </main>
      )}

      {isProfileVisible && <Profile data={filteredData} />}
    </>
  );
};

export default Hero;
