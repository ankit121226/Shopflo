export const initialState = {
  taskList: {},
  taskListLength: 0,
  isCreativeCreationSectionVisible: false,
  filteredTaskList: {},
};


export function CreateTaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_TASK":
      return {
        ...state,
        taskList: {
          ...state.taskList,
          [action?.payload?.taskValue?.title]: { ...action.payload.taskValue },
        },
      };
    case "UPDATE_TASKLIST_LENGTH":
      return {
        ...state,
        taskListLength: Object.keys({ ...state.taskList }).length,
      };
    case "SHOW_CREATIVE_CREATION":
      return {
        ...state,
        isCreativeCreationSectionVisible: true,
      };
    case "HIDE_CREATIVE_CREATION":
      return {
        ...state,
        isCreativeCreationSectionVisible: false,
      };
    case "FILTER_BY_BACKGROUND":
      return {
        ...state,
        filteredTaskList: { ...action.payload },
      };
      case "FILTER_BY_TITLE_AND_SUBTITLE":
        return {
          ...state,
          filteredTaskList: { ...action.payload },
        };
    default:
      return {
        ...state,
      };
  }
}
