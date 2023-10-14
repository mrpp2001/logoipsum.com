import searchIcon from "../assets/icon-park-twotone_search.svg";
import connectIcon from "../assets/icon-park-twotone_enquire.svg";
import researchIcon from "../assets/icon-park-twotone_table-report.svg";
import academyIcon from "../assets/icon-park-twotone_degree-hat.svg";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";

const Offers = () => {
  return (
    <>
      <div className="my-[132px] mx-[122px] flex ">
        <div>
          <div className=" w-[670px] flex flex-col gap-[14px]">
            <p className=" w-[670px] text-black text-[65px] font-bold ">
              <span className="text-sky-600 text-[65px] font-bold "
               style={{
                color: "zinc",
                background:
                  "linear-gradient(91deg, #0076CE 26.63%, #9400D3 65.81%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              >
                All-in-One{" "}
              </span>
              platform that Makes Easier
            </p>

            <p className="w-[604px] text-black text-2xl leading-[38px]">
              We are more than a platform; We are your success partner. Discover
              our services to achieve your business and educational goals
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[32px] gap-y-[64px] w-[670px] mt-[32px]">
            <div className="flex gap-[16px]">
              <img src={searchIcon} alt="" />
              <p className="w-[205px] font-normal">
                <span className="text-black text-xl font-bolds leading-loose">
                  SEARCH
                </span>
                for vital company information{" "}
              </p>
            </div>

            <div className="flex gap-[16px]">
              <img src={connectIcon} alt="" />
              <p className="w-[205px] font-normal">
                <span className="text-black text-xl font-bolds leading-loose">
                  CONNECT
                </span>
                with the resources to meet your business needs{" "}
              </p>
            </div>

            <div className="flex gap-[16px]">
              <img src={researchIcon} alt="" />
              <p className="w-[205px] font-normal">
                <span className="text-black text-xl font-bolds leading-loose">
                  RESEARCH
                </span>
                and generate reports that drive growth{" "}
              </p>
            </div>

            <div className="flex gap-[16px]">
              <img src={academyIcon} alt="" />
              <p className="w-[205px] font-normal">
                <span className="text-black text-xl font-bolds leading-loose">
                  ACADEMY
                </span>
                to give you the skills for success in your career{" "}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-[280px] h-[336px] relative ml-[340px]">
            <img className="w-[282px] h-[336]" src={boy} alt="" />

            <div className=" flex flex-col text-end gap-[8px] absolute  left-[-340px] top-[50px]">
              <p className=" text-black bg-[#EFD9F9] rounded-t-lg rounded-l-2xl text-sm font-normal py-[8px] px-[16px] leading-snug">
                Hey, check out loreumipsum services.
              </p>
              <p className=" text-black bg-[#EFD9F9]  rounded-t-lg rounded-l-2xl text-sm font-normal py-[8px] px-[16px] leading-snug">
                I learned from their videos, got my first job.
              </p>
              <p className=" text-black bg-[#EFD9F9]  rounded-t-lg rounded-l-2xl text-sm font-normal py-[8px] px-[16px] leading-snug">
                You won't be disappointed with their services.
              </p>
            </div>

            <svg
              className="w-[280px] h-[336px] absolute bottom-0 -z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="233"
              height="310"
              viewBox="0 0 233 310"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M232.117 157.811C232.126 200.963 219.152 243.708 192.605 273.144C166.842 301.71 130.717 312.068 95.5652 309.224C62.7774 306.57 31.421 288.946 10.8974 258.44C-16.5268 217.677 18.3 186.813 18.3 147.657C18.3 108.5 1.04975 106.256 5.92257 58.8804C10.532 14.0654 62.2614 0.834357 95.5652 0.834345C131.585 0.834331 166.851 13.2989 192.556 42.5359C218.78 72.3633 232.108 114.671 232.117 157.811Z"
                fill="#EFD9F9"
              />
            </svg>
          </div>

          <div className="w-[280px] h-[336px] relative">
            <img src={girl} alt="" />

            <div className=" -z-10 flex flex-col text-end gap-[8px] absolute right-[-75px] top-[-50px]">
              <p className=" text-black bg-[#DDF3FF] rounded-t-lg rounded-r-2xl text-sm font-normal py-[8px] px-[16px] leading-snug">
              I got a perfect analysis report from them too
              </p>
              <p className=" mr-[15px] text-black bg-[#DDF3FF]  rounded-t-lg rounded-r-2xl text-sm font-normal py-[8px] px-[16px] leading-snug">
              Oh, that's great.
              </p>
            </div>

            <svg
              className="w-[280px] h-[336px] absolute bottom-0 -z-10"
              xmlns="http://www.w3.org/2000/svg"
              width="265"
              height="340"
              viewBox="0 0 265 340"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.603528 173.126C0.593605 220.409 14.8099 267.246 43.8993 299.501C72.1284 330.803 111.713 342.152 150.23 339.035C186.157 336.128 220.516 316.816 243.005 283.39C263.492 252.938 267.946 211.436 261.85 173.126C256.723 140.902 230.46 123.798 213.496 97.9328C191.78 64.8223 184.468 13.2626 150.23 2.93925C112.441 -8.45468 72.1185 14.7763 43.9523 46.8126C15.2173 79.496 0.613449 125.854 0.603528 173.126Z"
                fill="#DDF3FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
