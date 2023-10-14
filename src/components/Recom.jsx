import RecomCard from "./RecomCard";

const Recom = () => {
  return (
    <>
      <div className="my-[132px] mx-[128px]">
        <p className=" text-black text-4xl font-bold ">Recommended for you</p>
        <div className="flex gap-[10px] mt-[32px]">
          <RecomCard />
          <RecomCard />
          <RecomCard />
        </div>
      </div>
    </>
  );
};

export default Recom;
