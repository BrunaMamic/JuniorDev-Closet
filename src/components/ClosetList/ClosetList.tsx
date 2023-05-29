/* eslint-disable @typescript-eslint/no-explicit-any */
import ClosetListData from "../ClosetListData/ClosetListData";
import "./ClosetList.css";

const Closetlist = (props: any) => {

  const filterByType = (item: any) => {
    const { type } = props.filteredCloset;
    if (type) {
      return type === item.type;
    } else return true;
  };

  const filterBySize = (item: any) => {
    const { condition } = props.filteredCloset;
    if (condition) {
      return condition === item.condition;
    } else return true;
  };

  const filterByCondition = (item: any) => {
    const { size } = props.filteredCloset;
    if (size) {
      return size === item.size;
    } else return true;
  };

  return (
    <div className="mainForDivs">
      {props.clothes.filter(
        (item: any) =>
          filterByType(item) && filterByCondition(item) && filterBySize(item)
      ).length ? (
        props.clothes
          .filter(
            (item: any) =>
              filterByType(item) &&
              filterByCondition(item) &&
              filterBySize(item)
          )
          .map((items: any) => (
            <ClosetListData
              key={items.id}
              type={items.type}
              size={items.size}
              color={items.color}
              condition={items.condition}
              image={items.image}
              details={items.details}
              id={items.id}
              setCloset={props.setCloset}
            />
          ))
      ) : (
        <div>No items</div>
      )}
    </div>
  );
};
export default Closetlist;
