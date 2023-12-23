import "./Card.css";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="most-popular-item ">
      <div
        className="card-wrapper  rounded-[15px]
         sm:p-2 lg:py-8 lg:px-6 py-4 px-5 "
      >
        <img
          className="most-popular-item-image rounded-[15px]"
          src={props.src}
          alt=""
        />
        <div className="most-popular-item-content sm:text-xs  md:text-sm text-md flex justify-between">
          <h4 className="">
            Anxiety
            <br />
            <span>SandBox</span>
          </h4>
          <ul className="">
            <li className="flex justify-between gap-1">
              <span className="text-yellow-500">
                <FaStar />
              </span>

              <span>4.8</span>
            </li>
            <li className="flex justify-between gap-1">
              <span className="text-pink-500">
                <FaDownload />
                </span>
                <span>2.3M</span>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
