import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item my-20 py-10 md:py-20">
      <SectionTitle heading="Featured item" subHeading="Check it out" />
      <div className="flex flex-col px-5 items-center md:flex-row gap-5 md:gap-10">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="dark:text-white">
          <p className="text-xl">March 20, 2023</p>
          <p className="text-xl">WHERE CAN I GET SOME?</p>
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="uppercase border-b mt-2.5 md:mt-5">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
