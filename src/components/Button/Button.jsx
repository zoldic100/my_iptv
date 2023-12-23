const Button = (props) => {
  return (
    <>
      <div className="mean-button ">
        <button className="inline-block px-4 py-2 my-5 bg-pink-500 hover:bg-pink-300 text-white font-bold rounded-full">
          {props.value}
        </button>
      </div>
    </>
  );
};

export default Button;
