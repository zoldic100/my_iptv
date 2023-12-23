import './SectionDiv.css'
const SectionDiv = (props) => {
  return (
    <>
      <div className="section-wrapper  rounded-[25px] my-5  py-6">
        {props.children}
      </div>
    </>
  );
};

export default SectionDiv;
