/* eslint-disable @typescript-eslint/no-explicit-any */
import "./AboutItem.css";

const AboutItem = (props: any) => {
  return (
    props.modal && (
      <div>
        <div className="moreDetails" onClick={() => props.setModal(false)} />
        <div className="details">
          <div className="details2">
            <h2>{props.type}</h2>
            <div className="detailsEdit">
              <h3>Size:</h3>
              <div>{props.size}</div>
            </div>
            <div className="detailsEdit">
              <div>
                {props.image ? (
                  <img height={"200px"} width={"150px"} src={props.image} />
                ) : (
                  <div className="imgPlaceholder" />
                )}
              </div>
            </div>
            <div className="detailsEdit">
              <h3>Color:</h3>
              <input
                type="color"
                readOnly={true}
                disabled={true}
                value={props.color}
              />
            </div>
            <div className="detailsEdit">
              <h3>Condition:</h3>
              <div>{props.condition}</div>
            </div>
            <div className="detailsEdit">
              <h3>About: </h3>
              <div>{props.details}</div>
            </div>
          </div>
          <div>
            <button className="closeModal" onClick={props.toggleModal}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AboutItem;
