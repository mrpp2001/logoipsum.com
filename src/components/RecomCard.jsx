import React, { useState, useEffect } from "react";
import jsonData from "../../data.json";
import star from "../assets/star-fill.svg";
import report from "../assets/report.png"; 

const RecomCard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * jsonData.length);
    setData(jsonData[randomIndex]);
  }, []);

  return (
    <>
      {Object.keys(data).length > 0 && (
        <div className="w-[405px]  bg-white rounded-2xl shadow">
          <img
            className="rounded-2xl"
            // src={data.image ? data.image : report} 
            src={report} 
            alt=""
          />

          <div className="flex flex-col gap-[5px] px-[23px] py-[16px]">
            <p className="flex justify-between text-black text-xl font-bold">
              {data.name}
              <span className="text-black text-xl font-bold">{data.price}</span>
            </p>
            <p className="text-black text-base font-normal font-['Poppins']">
              {data.intro}
            </p>

            <div className="flex gap-[5px] mt-[13px]">
              <img src={star} alt="" />
              <p className="text-black text-base font-normal">
                <span className="text-sky-600 text-base font-bold">{data.rating} </span>
                ({data.reviewCount})
              </p>
            </div>

            <button className="mt-[31px] p-[10px] bg-sky-600 text-white font-bold rounded-xl hover:bg-white hover:border-2 hover:border-sky-600 hover:text-sky-600">
              View services
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecomCard;
