import axios from "axios";

import {
  CREATE_HOMEWORK,
  CREATE_HOMEWORK_LOADING,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  PROJECT_LOADING,
  GET_HOMEWORKS,
  PROJECTS_LOADING
} from "./types";

// Create Project
export const createHomeWork = async (dispatch, homeWorkData, history) => {
  dispatch({
    type: CREATE_HOMEWORK_LOADING,
    loading: true
  })
  axios
    .post("/api/homeworks/create", homeWorkData)
    .then(res => {
      dispatch({
        type: CREATE_HOMEWORK,
        payload: res.datas
      })
      dispatch({
        type: CREATE_HOMEWORK_LOADING,
        loading: false
      });
      history.push('/homeworks')
    }
    )
    .catch(err => {
      console.log(err);
      dispatch({
        type: CREATE_HOMEWORK_LOADING,
        loading: false
      })
    });
};

// Update Project
export const updateProject = projectData => dispatch => {
  axios
    .patch("/api/projects/update", projectData)
    .then(res =>
      dispatch({
        type: UPDATE_PROJECT,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

// Delete Project
export const deleteProject = (id, history) => dispatch => {
  axios
    .delete(`/api/projects/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_PROJECT,
        payload: id
      })
    )
    .then(res => history.push("/home"))
    .catch(err => console.log(err));
};

// Get specific project by id
export const getProject = id => dispatch => {
  dispatch(setProjectLoading());
  axios
    .get(`/api/projects/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROJECT,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROJECT,
        payload: null
      })
    );
};

// Get all projects for specific user
export const fetchHomeWorks = dispatch => {
  dispatch(setProjectsLoading());
  axios
    .get("/api/homeworks")
    .then(res =>
      dispatch({
        type: GET_HOMEWORKS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_HOMEWORKS,
        payload: null
      })
    );
};

// Project loading
export const setProjectLoading = () => {
  return {
    type: PROJECT_LOADING
  };
};

// Projects loading
export const setProjectsLoading = () => {
  return {
    type: PROJECTS_LOADING
  };
};
