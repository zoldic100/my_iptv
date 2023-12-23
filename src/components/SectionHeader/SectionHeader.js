const SectionHeader = (props) => {
  return (
    <>
      <div className="section-header  font-bold ">
        <h3 className="mb-2 px-4 text-4xl">
          <span className="underline">{props.title}</span>
          <span className="text-pink-500 ">  {props.pink}</span>
        </h3>
      </div>
    </>
  );
};

export default SectionHeader;
