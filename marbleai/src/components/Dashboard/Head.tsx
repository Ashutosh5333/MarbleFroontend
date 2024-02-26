
import { Headingdata } from "../../context/index";
import { HeadItem } from "./HeadItem";

const Head = () => {
  

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
  </div>
  );
};

export default Head;
