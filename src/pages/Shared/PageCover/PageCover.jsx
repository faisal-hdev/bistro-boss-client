import { Parallax } from "react-parallax";

const PageCover = ({ img, coverTitle, subMenu }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div
        className="hero h-[400px] md:h-[600px]"
        // style={{
        //   backgroundImage: `url("${img}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-white">
            <h1 className="md:mb-5 text-2xl md:text-6xl font-medium uppercase">
              {coverTitle}
            </h1>
            <p className="md:mb-5">{subMenu}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default PageCover;
