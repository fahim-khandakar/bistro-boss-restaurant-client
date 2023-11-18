const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-1/3 mx-auto my-5 text-center">
      <p className="text-yellow-600 pb-2 italic">--- {subHeading} ---</p>
      <p className="text-3xl uppercase border-y-2 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;
