import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";
import homeworksReducer from './homeworksReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  projects: projectsReducer,
  homeworks: homeworksReducer,
  tasks: tasksReducer
});
