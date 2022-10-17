import React, { useState } from "react";
import { useTaskContext } from "../../context";
import "./index.css";
function CreateTask() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [color, setColor] = useState("");
  const { value } = useTaskContext();
  const { dispatch, state } = value;
  const handleSubmit = (e) => {
    if (state.taskListLength < 5) {
      dispatch({
        type: "ADD_TO_TASK",
        payload: {
          taskValue: { title: title, subTitle: subTitle, color: color },
        },
      });
      setTitle("");
      setSubTitle("");
      setColor("");
     
    }
    e.preventDefault();
  };

  const handelClose = () => {
    dispatch({ type: "HIDE_CREATIVE_CREATION" });
  };

  const handleTaskBackGround = (color) => {
    setColor(color);
  };

  return (
    <div className="createtask-wrapper">
      <div className="header">
        <h1>Creative Creation</h1>
        <div className="close" onClick={handelClose}>
          *
        </div>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="title">Label</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Enter text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="sub-title">subtitle</label>
        <br />
        <input
          type="text"
          name="sub-title"
          placeholder="Enter sub-title"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        <div className="done-btn">
          <input
            type="submit"
            value="Done"
            disabled={title == "" && subTitle == ""}
          />
        </div>
      </form>
      <div className="dots-wrapper">
        <div className="dots">background Color</div>
        <div className="dots">
          {value?.data?.colors?.map((color, ind) => {
            return (
              <div
                className="dot"
                key={ind + color}
                style={{ backgroundColor: `${color}` }}
                onClick={() => handleTaskBackGround(color)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
