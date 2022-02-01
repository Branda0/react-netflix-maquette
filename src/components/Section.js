import Category from "./Category";
import List from "./List";

const Section = (props) => {
  return (
    <div className="section-container">
      <Category category={props.category} />
      <List images={props.images} />
    </div>
  );
};

export default Section;
