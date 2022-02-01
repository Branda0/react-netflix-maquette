import Image from "./Image";

const List = (props) => {
  return (
    <div className="list-container">
      {props.images.map((image, index) => {
        return <Image key={index} url={image} />;
      })}
      ;
    </div>
  );
};

export default List;
