/* eslint-disable @typescript-eslint/no-explicit-any */
import "./ClosetListData.css";
import DeleteFromCloset from "../DeleteFromCloset/DeleteFromCloset";
import UpdateCloset from "../UpdateCloset/UpdateCloset";
import AboutItem from "../AboutItem/AboutItem";
import { useState } from "react";

const ClosetListData = (props: any) => {
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [updateModal, setUpdateModal] = useState(true);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const removeUpdate = () => {
    setUpdateModal(false);
    setToggleUpdate(true);
  };

  return (
    <div className="itemPlusModal">
      <div>
        <div className="edit">
          <div className="forDeleteDecor">
            <div className="infoDecor">
              <h4>{props.type}</h4>
              <div> Size: {props.size}</div>
              <div>
                {props.image ? (
                  <img height={"200px"} width={"150px"} src={props.image} />
                ) : (
                  <div className="imgPlaceholder" />
                )}
              </div>
            </div>

            <DeleteFromCloset id={props.id} delete={props.setCloset} />
          </div>

          <div className="actionContainer">
            <div>
              <button onClick={toggleModal} className="moreButton">
                <i className="bi bi-three-dots"></i>
              </button>
            </div>

            <div className="updateModal">
              {updateModal && (
                <button className="updateButton" onClick={() => removeUpdate()}>
                  <i className="bi bi-pencil-square"></i>
                </button>
              )}
            </div>
          </div>
          {toggleUpdate && (
            <UpdateCloset
              id={props.id}
              item={props}
              onChangeChlothes={props.setCloset}
              setToggle={setToggleUpdate}
              updateModal={setUpdateModal}
            />
          )}
        </div>
      </div>

      <AboutItem
        type={props.type}
        size={props.size}
        image={props.image}
        color={props.color}
        condition={props.condition}
        details={props.details}
        toggleModal={toggleModal}
        modal={modal}
        setModal={setModal}

      />
    </div>
  );
};
export default ClosetListData;
