import React from "react";
import { useTaskContext } from "../../context";
import "./index.css";
function TaskList() {
  const { value } = useTaskContext();
  const TaskObj = value?.state?.taskList;
  const filteredTaskList = value?.state?.filteredTaskList;
  return (
    <div className="task-displau-container">
        {Object.keys(filteredTaskList).length > 0  ? (
            Object.keys(filteredTaskList).map((taskKey) => {
                return (
                  <div className="title-wrapper" style={{backgroundColor: `${filteredTaskList[taskKey].color}`}} >
                    <div className="title">{filteredTaskList[taskKey].title}</div>
                    <div className="subtitle">{filteredTaskList[taskKey].subTitle}</div>
                  </div>
                );
              })
        ): (
            Object.keys(TaskObj).map((taskKey) => {
                return (
                  <div className="title-wrapper" style={{backgroundColor: `${TaskObj[taskKey].color}`}} >
                    <div className="title">{TaskObj[taskKey].title}</div>
                    <div className="subtitle">{TaskObj[taskKey].subTitle}</div>
                  </div>
                );
              })
        ) }
      
    </div>
  );
}

export default React.memo(TaskList);
