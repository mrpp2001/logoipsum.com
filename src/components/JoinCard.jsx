import React from "react";

const data = [
  {
    id: 1,
    name: "Commencement of business ",
    intro: "Invested shareholders must confirm payment and office address ",
    dueDate: "Within 180 days",
    PenaltyFees: ["₹50,000", "₹1,000"],
    PenaltyFeesFor: ["for the company", "/day for directors"],
  },
  {
    id: 2,
    name: "Auditor Appointment",
    intro: "Company informs new auditor and submits ADT.1 form to ROC.",
    dueDate: "Within 30 days",
    PenaltyFees: ["₹300"],
    PenaltyFeesFor: ["per month."],
  },
  {
    id: 3,
    name: "DIN eKYC",
    intro:
      "Directors share personal information for identification & verification ",
    dueDate: "Every Year",
    PenaltyFees: ["₹5000"],
    PenaltyFeesFor: ["one time"],
  },
  {
    id: 4,
    name: "DPT-3",
    intro:
      "Companies report money taken from people to ROC; auditors confirm details.",
    dueDate: "Within 30 days",
    PenaltyFees: ["₹300"],
    PenaltyFeesFor: ["per month."],
  },
  {
    id: 5,
    name: "MCA Form AOC-4",
    intro: "It's like an official report card for a company's documents ",
    dueDate: "On or Before 30th November ",
    PenaltyFees: ["₹200"],
    PenaltyFeesFor: ["per day (No upper limit)*"],
  },
  {
    id: 6,
    name: "MCA Form MGT-7",
    intro:
      "Companies must annually report activities and finances to the registrar. ",
    dueDate: "On or Before 31st December ",
    PenaltyFees: ["₹200"],
    PenaltyFeesFor: ["per day (No upper limit)* "],
  },
];

const JoinCard = () => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-[405px] h-[266px] mb-[32px] relative bg-white rounded-[20px] shadow pt-[24px]"
        >
          <p className="w-11 h-11 font-bold text-white text-2xl p-2 absolute top-[-10px] left-[-10px] bg-gradient-to-r from-sky-600 to-purple-700 rounded-lg">
            {item.id}
            <sup>th</sup>
          </p>

          <div className="flex flex-col text-center gap-[5px]  mx-[32px]">
            <p className="text-black text-[20px] font-bold">{item.name}</p>
            <p className="text-black text-base text-[16px] font-normal leading-relaxed">
              {item.intro}
            </p>
          </div>

          <div className="flex justify-between mt-[16px] mx-[32px] mb-[26px] bg-zinc-100 p-[10px] rounded-[10px]">
            <div className="w-28">
              <p className="text-sky-600 text-lg font-bold leading-7">
                Due date
              </p>
              <p className="text-black text-base font-normal leading-relaxed">
                {item.dueDate}
              </p>
            </div>

            <div>
              <p className="text-red-400 text-lg font-bold leading-7">
                Penalty fees
              </p>
              <p>
                <span className="text-black font-bold leading-7">
                  {item.PenaltyFees[0]}
                </span>{" "}
                {item.PenaltyFeesFor[0]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JoinCard;
