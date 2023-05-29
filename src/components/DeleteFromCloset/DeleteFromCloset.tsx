/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState, useEffect } from "react";
import "./DeleteFromCloset.css";

const DeleteFromCloset = (props: any) => {
  const [dataID, setDataID] = useState(props.id);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setDataID(props.id);
  }, [props.id]);

  async function deleteData() {
    await axios.delete(`http://localhost:3001/myCloset/${dataID}`);
    const data = await axios.get("http://localhost:3001/myCloset");
    props.delete(data.data);
    setModal(false);
  }

  return (
    <div>
      <button className="deleteButton" onClick={toggleModal}>
        <i className="bi bi-trash3"></i>
      </button>

      {modal && (
        <div className="modal">
          <div className="container">
            <h2 className="modalTitle">Are you sure?</h2>
            <div className="modalButtons">
              <button className="confirmButton" onClick={deleteData}>
                <i className="bi bi-check2"></i>
              </button>
              <button className="cancelButton" onClick={toggleModal}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteFromCloset;
