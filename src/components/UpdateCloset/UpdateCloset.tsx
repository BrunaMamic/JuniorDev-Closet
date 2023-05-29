/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./UpdateCloset.css";

const UpdateCloset = (props: any) => {
  const { register } = useForm();
  const [updateClothes, setUpdate] = useState(props.item);

  const changeHandler = (event: any) => {
    const { name, value } = event.target;
    if (value !== 0) {
      setUpdate({ ...updateClothes, [name]: value });
    }
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    const result = proccesData(updateClothes);
    const data = await axios.put(
      "http://localhost:3001/myCloset/" + props.id,
      result
    );
    props.onChangeChlothes((prev: any) => {
      return prev.map((x: any) => {
        if (x.id === data.data.id) {
          return data.data;
        } else {
          return x;
        }
      });
    });

    props.setToggle(false);
    props.updateModal(true);
  }

  const proccesData = (data: any) => {
    return {
      id: Math.floor(Math.random() * 1000),
      type: data.type,
      size: data.size,
      color: data.color,
      condition: data.condition,
      image: data.image,
      details: data.details,
    };
  };

  return (
    <div>
      <div className="fade" onClick={() => {
          props.updateModal(true);
          props.setToggle(false);
        }} />
      <div className="popup">
        <form onSubmit={handleSubmit} className="updateForm">
          <div>
            Type:
            <select
              {...register("type")}
              onChange={changeHandler}
              value={updateClothes.type}>
              <option value={0}>Choose:</option>
              <option value="Dress">Dress</option>
              <option value="Accessories"> Accessories</option>
              <option value="Jeans"> Jeans</option>
              <option value="Shirt"> Shirt</option>
              <option value="Skirt"> Skirt</option>
              <option value="Jacket"> Jacket</option>
            </select>
          </div>

          <br></br>
          <div>
            Size:
            <select
              {...register("size")}
              onChange={changeHandler}
              value={updateClothes.size}>
              <option value={0}>Choose:</option>
              <option value="XS">XS</option>
              <option value="S"> S</option>
              <option value="M"> M</option>
              <option value="L"> L</option>
              <option value="XL"> XL</option>
              <option value="XXL"> XXL</option>
            </select>
          </div>
          <br></br>
          <div>
            Color:
            <input
              type="color"
              name="color"
              onChange={changeHandler}
              value={updateClothes.color}
            />
          </div>

          <br></br>
          <div>
            Image:
            <input
              type="url"
              placeholder="Insert image URL "
              {...register("image", {})}
              onChange={changeHandler}
              value={updateClothes.image}
            />
          </div>

          <br></br>
          <div>
            Condition:
            <input
              {...register("condition")}
              type="radio"
              defaultValue={props.condition}
              value="New"
              onChange={changeHandler}
            />
            New
            <input
              {...register("condition")}
              type="radio"
              defaultValue={props.condition}
              value=" Used"
              onChange={changeHandler}
            />
            Used
          </div>

          <div>
            Details:
            <textarea
              {...register("details")}
              onChange={changeHandler}
              value={updateClothes.details}
            />
          </div>

          <br></br>
          <button onClick={handleSubmit}>UPDATE</button>
        </form>
      </div>
    </div>
  );
};
export default UpdateCloset;
