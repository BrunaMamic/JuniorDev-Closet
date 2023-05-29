/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddToCloset.css";

const AddToCloset = (props: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [newClothes, setNewClothes] = useState({
    id: "",
    type: "",
    size: "",
    color: "",
    condition: "",
    image: "",
    details: "",
  });

  function handler(event: any) {
    const { name, value } = event.target;
    if (value !== 0) {
      setNewClothes({ ...newClothes, [name]: value });
    }
  }


  async function createItem() {
    const result = proccesData(newClothes);

    const data = await axios.post("http://localhost:3001/myCloset", result);
    props.setCloset((prev: any) => {
      return [...prev, data.data];
    });
    reset();
  }

  const proccesData = (data: any) => {
    return {
      type: data.type,
      size: data.size,
      color: data.color,
      condition: data.condition,
      image: data.image,
      details: data.details,
    };
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit(createItem)} className="inputForm">
        <div className="title">Add to closet: </div>
        <hr style={{ width: "100%", color: "#977761" }}></hr>
        <div className="allInputs">
          <div className="input">
            Type:
            <div style={{ marginLeft: "30px" }}>
              <select
                {...register("type", { required: true, minLength: 2 })}
                onChange={handler}>
                <option value={0}>Choose:</option>
                <option value="Dress">Dress</option>
                <option value="Accessories"> Accessories</option>
                <option value="Jeans"> Jeans</option>
                <option value="Shirt"> Shirt</option>
                <option value="Skirt"> Skirt</option>
                <option value="Jacket"> Jacket</option>
              </select>
            </div>
          </div>
          {errors.type && <div className="errorText">Please choose a type</div>}

          <br></br>
          <div className="input">
            Size:
            <div style={{ marginLeft: "30px" }}>
              <select
                {...register("size", {
                  required: true,
                  pattern: /^[a-zA-Z]+$/,
                })}
                onChange={handler}>
                <option value={0}>Choose:</option>
                <option value="XS">XS</option>
                <option value="S"> S</option>
                <option value="M"> M</option>
                <option value="L"> L</option>
                <option value="XL"> XL</option>
                <option value="XXL"> XXL</option>
              </select>
            </div>
          </div>
          {errors.size && <div className="errorText">Please choose a size</div>}
          <br></br>
          <div className="input">
            Color:
            <div style={{ marginLeft: "30px" }}>
              <input
                type="color"
                {...register("color", {})}
                onChange={handler}
              />
            </div>
          </div>

          <br></br>
          <div className="input">
            Image:
            <div style={{ marginLeft: "30px" }}>
              <input
                type="url"
                placeholder="Insert image URL "
                {...register("image", {})}
                onChange={handler}
              />
            </div>
          </div>

          <br></br>
          <div className="input">
            Condition:
            <div style={{ marginLeft: "20px", marginBottom: "15px" }}>
              <input
                {...register("condition")}
                type="radio"
                value="New"
                onChange={handler}
              />{" "}
              New
              <input
                {...register("condition")}
                type="radio"
                value="Used"
                onChange={handler}
              />{" "}
              Used
            </div>
          </div>

          <div className="input">
            Details:
            <div style={{ marginLeft: "30px" }}>
              <textarea {...register("details", {})} onChange={handler} />
            </div>
          </div>
        </div>
        <hr style={{ width: "100%", color: "#977761" }}></hr>
        <input type="submit" value="+" style={{ marginLeft: "90px" }} />
      </form>
    </div>
  );
};

export default AddToCloset;
