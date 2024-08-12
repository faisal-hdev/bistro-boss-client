const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-3/12 text-center my-5 md:my-10">
      <p className="text-yellow-500 mb-3">---- {subHeading} ----</p>
      <p className="uppercase text-xl border-opacity-15 text-black md:text-4xl md:border-y-2  border-y md:py-3 py-1.5">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
