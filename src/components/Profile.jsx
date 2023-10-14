import star from "../assets/star-fill.svg";
import calendar from "../assets/calendar.svg";
import slider from "../assets/Slider.svg";
import report from "../assets/report.png";
import Recom from "./Recom";


const Profile = ({ data }) => {

 
  return (
    <>
    
      {data.map((profile) => (
        
      <main key={profile.id} className="mx-[128px] my-[80px] flex gap-[33px]">
        <div className="flex flex-col gap-[32px] w-[515px]">
          <div className=" w-[515px] text-black">
            <p className=" text-4xl font-bold">{profile.name}</p>
            <p className="text-xl font-normal leading-8">
            {profile.intro}
            </p>
          </div>

          <p className="flex gap-[8px] text-black text-xl font-normal">
            <img src={star} alt="" />
            <span className="text-sky-600 text-xl font-bold">{profile.rating} </span>
            ({profile.reviewCount})
          </p>

          <div className="flex flex-col w-[515px] p-[25px] bg-white rounded-2xl shadow">
            <p className=" flex justify-between text-black text-xl font-normal leading-loose">
            {profile.taskComplexity}
              <span className=" text-black p-[5px] text-2xl font-bold ">
              {profile.price}
              </span>
            </p>

            <p className="flex gap-[10px] mt-[32px]  text-black text-xl font-normal leading-loose">
              <img
                className="w-[24px] h-[24px] my-[8px]"
                src={calendar}
                alt=""
              />
             {profile.deliveryTime}
            </p>

            <div className="mt-[23px] flex justify-between">
              <button className="py-[10px] px-[10px] w-[220px] rounded-xl font-bold text-white bg-sky-600 hover:bg-white hover:border-2 hover:border-sky-600 hover:text-sky-600">
                Request Proposal
              </button>

              <button className="py-[10px] px-[10px] w-[220px] rounded-xl font-bold text-sky-600 border-2 border-sky-600  hover:bg-sky-600 hover:text-white">
                Chat with me
              </button>
            </div>
          </div>

          <div className="text-black w-[515px] p-[28px] bg-white rounded-2xl shadow">
            <p className="text-[35px] font-bold ">What people say?</p>
            <p className="mt-[16px]  text-xl font-normal leading-8">
            {profile.testimonial.text}
            </p>
            <img className="mt-[60px] mx-auto" src={slider} alt="" />
          </div>
        </div>

        <div className="w-full  flex flex-col gap-[32px] leading-8">
          <img className="rounded-3xl" src={report} alt="" />

          <div className=" gap-[32px]">
            <p className=" text-black text-4xl font-bold ']">
              About{" "}{profile.name}
            </p>

            <div className="flex justify-between  mt-[22px]">
              <p className=" text-black text-xl font-normal flex flex-col gap-[8px] w-[220px]">
                <span className=" text-neutral-400 text-base font-bold ">
                  FROM
                </span>
                {profile.about.from}
              </p>

              <p className=" text-black text-xl font-normal flex flex-col gap-[8px]  w-[220px]">
                <span className=" text-neutral-400 text-base font-bold ">
                  PARTNER SINCE
                </span>
                {profile.about.partnerSince}
              </p>

              <p className=" text-black text-xl font-normal flex flex-col gap-[8px] w-[220px]">
                <span className=" text-neutral-400 text-base font-bold ">
                  AVERAGE RESPONSE TIME
                </span>
                {profile.about.averageResponseTime}
              </p>
            </div>
          </div>

          <div>
            <p className=" text-neutral-400 text-base font-bold">ABOUT</p>
            <p className=" text-black text-xl font-normal ">
            {profile.about.description}
            </p>
          </div>

          <div className="flex justify-between text-xl">
            <div className="w-[405px]">
              <p className="text-neutral-400 font-bold ">SERVICES I OFFER</p>
              <ul className="list-disc ml-7 mt-[8px]">
              {profile.about.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
              </ul>
            </div>

            <div className="w-[296px]">
              <p className="text-neutral-400 font-bold">WHY ME?</p>
              <ul className="list-disc ml-7 mt-[8px]">
              {profile.about.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      ))}

      <Recom />
    </>
  );
};

export default Profile;
