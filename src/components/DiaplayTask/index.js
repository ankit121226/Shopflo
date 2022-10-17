import React, { useEffect, useState } from "react";
import { useTaskContext } from "../../context";
import "./index.css";
function DiaplayTask() {
  const { value } = useTaskContext();
  
  const {state, dispatch} = value;
  const [progress, setProgress] = useState(0);
 
  useEffect(() => {
      dispatch({type: 'UPDATE_TASKLIST_LENGTH'})
      let val = 20 * state?.taskListLength;
      setProgress(val) 
  }, [state?.taskListLength, state?.taskList]);

 const handelAddCreative = () => {
  dispatch({type: 'SHOW_CREATIVE_CREATION'})
 }

 const filterByBackGround = (color) => {
    let taskKeys = Object.keys(value.state.taskList);
    
    const filteredTaskList = taskKeys.map((keyname) => {
        if(value.state.taskList[keyname].color === color){
          return {
            ...value.state.taskList[keyname]
          }
        }
    }).filter((val) => !!val )

  dispatch({type: 'FILTER_BY_BACKGROUND', payload: filteredTaskList})
 }

 const filterTask = (searchVal) => {
  let taskKeys = Object.keys(value.state.taskList);
    
  const filteredTaskList = taskKeys.map((keyname) => {
      if(value.state.taskList[keyname].title.includes(searchVal) || value.state.taskList[keyname].subTitle.includes(searchVal)){
        return {
          ...value.state.taskList[keyname]
        }
      }
  }).filter((val) => !!val )

dispatch({type: 'FILTER_BY_TITLE_AND_SUBTITLE', payload: filteredTaskList})
 }
  return (
    <div className="tasklist-wrapper">
      <div className="filter-text">
        <div className="filter-by-txt">Filter By:</div>
      </div>
      <div className="dots-title-search">
        <div className="dots-and-color">
          <div className="color-dots">color:</div>
          <div className="dots-grp">
            {value?.data?.colors?.map((color, ind) => {
              return (
                <div
                className="dot"
                key={ind + color}
                style={{ backgroundColor: `${color}` }}
                onClick={() => filterByBackGround(color)}
              ></div>
              );
            })}
          </div>
        </div>

        <div className="title-subtitle">
          <div>title/ subtitle</div>
          <input placeholder="search acress title and subtitle" onChange={(e) =>filterTask(e.target.value)} />
        </div>
      </div>
      <div className="progress">
        <progress id="file" value={progress} max="100">
          {" "}
          32%{" "}
        </progress>
        <div>{state?.taskListLength} / 5 Creatives</div>
      </div>
      <button className="button" disabled={state.isCreativeCreationSectionVisible} onClick={handelAddCreative}>Add Creatives</button>
    </div>
  );
}

export default React.memo(DiaplayTask);
