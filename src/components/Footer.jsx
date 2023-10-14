import logo from "../assets/footer-logo.png";
import facebook from "../assets/facebook-icon.svg";
import linkdIn from "../assets/linkdin-icon.svg";
import whatsapp from "../assets/whatsapp-icon.svg";
import instagram from "../assets/instagram-icon.svg";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-gradient-to-r from-[#0e6bce] to-[#6327d1] py-[40px]">
        <div className="flex justify-between pb-[32px] mt-[31px] mx-[128px] border-b-2 border-white">
          <div className="w-64 flex flex-col gap-[16px]">
            <img className="w-[155px] h-[80px]" src={logo} alt="" />
            <p className=" text-white text-[14px] font-normal leading-snug">
              India's first platform dedicated to simplifying partner search
            </p>
          </div>

          <div className="flex gap-[105px]">
            <ul className="flex flex-col gap-[16px] text-[16px] font-light">
              <li className="font-semibold">COMPANY</li>
              <li>About </li>
              <li>Pricing </li>
              <li>Careers </li>
            </ul>

            <ul className="flex flex-col gap-[16px] text-[16px] font-light">
              <li className="font-semibold">SOLUTIONS</li>
              <li>Search </li>
              <li>Connect </li>
              <li>Research </li>
              <li>Academy </li>
            </ul>

            <ul className="flex flex-col gap-[16px] text-[16px] font-light">
              <li className="font-semibold">RESOURCES</li>
              <li>Blogs </li>
              <li>Forms </li>
            </ul>

            <ul className="flex flex-col gap-[16px] text-[16px] font-light">
              <li className="font-semibold">SUPPORT</li>
              <li>Help </li>
              <li>Contact Us </li>
            </ul>

            <ul className="flex flex-col gap-[16px] text-[16px] font-light">
              <li className="font-semibold">LEGAL</li>
              <li>Privacy </li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mx-[128px] mt-[32px] ">
          <p className=" text-white text-sm  text-start font-normal font-['Open Sans'] leading-snug">
            Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
            Maharashtra
          </p>
          <div className="flex gap-[24px] cursor-pointer">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkdIn} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
      </footer>
      <div className=" bg-black justify-center text-center ">
        <p className="text-center text-white text-xs font-normal p-[21px]">
          Registered trademark of India Private Limited © 2023 loerumipsum Inc.
          All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
