import JoinCard from "./JoinCard";


const JoinUs = () => {
  return (
    <>
      <div className="relative w-full">
        <header className="flex flex-col justify-center mt-[132px] ">
          <p className="text-center text-[65px]">
            Want to <span 
            className="text-sky-600 font-bold "
            style={{
              color: "zinc",
              background:
                "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            >Join</span> Us?
          </p>
          <p className="text-black text-center text-2xl font-normal leading-9">
            To remain with us, it is essential that you diligently follow the
            steps provided
          </p>
        </header>
        <div className=" grid grid-cols-3 grid-rows-2  mt-[83px] mx-[115px] ">
          <JoinCard />
          
          <svg
            className="absolute bottom-0 right-0 -z-10 "
            // bg-gradient-to-b from-blue-200 to-transparent"
            xmlns="http://www.w3.org/2000/svg"
            width="1536"
            height="757"
            viewBox="0 0 1536 757"
            fill="none"
          >
            <path
              d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z"
              fill="#DDF3FF"
            />
          </svg>
        </div>
      </div>
      <p className="mx-[128px] text-start  text-black font-normal leading-relaxed">
        * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
        <span className=" font-bold leading-relaxed">every day </span>
        until you file the form . There is no maximum penalty amount. So, if you
        don't file the form for a year, you will owe ₹73,000 per form
      </p>
    </>
  );
};

export default JoinUs;
