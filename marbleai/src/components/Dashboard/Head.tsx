import { Headingdata } from "../../context/index";
import { HeadItem } from "./HeadItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Head = ({ SetActive, ActiveStore }: any) => {
  const handleActive = () => {
    SetActive((prev: any) => !prev);
  };

  return (
    <div className="m-auto sm:px-8 py-6 flex flex-col sm:flex-row gap-4 lg:gap-8">
      {Headingdata.map((heading, index) => (
        <HeadItem
          key={index}
          title={heading.Title}
          total={heading.total}
          per={heading.per}
        />
      ))}
      <div className=" m-auto">
        <button onClick={handleActive} className="m-auto">
          {ActiveStore ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
    </div>
  );
};

export default Head;
