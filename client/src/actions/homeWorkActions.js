import axios from "axios";

import {
  CREATE_HOMEWORK,
  CREATE_HOMEWORK_LOADING,
  GET_PROJECT,
  PROJECT_LOADING,
  GET_HOMEWORKS,
  PROJECTS_LOADING,
  UPDATE_HOMEWORK,
  DELETE_HOMEWORK
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
export const updateHomeWork = (dispatch, homeWorkData, history) => {
  dispatch({
    type: CREATE_HOMEWORK_LOADING,
    loading: true
  })
  axios
    .patch("/api/homeworks/update", homeWorkData)
    .then(res => {
      dispatch({
        type: UPDATE_HOMEWORK,
        payload: res.data
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

// Delete Project
export const deleteHomeWork = (dispatch, id) => {
  axios
    .delete(`/api/homeworks/delete/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_HOMEWORK,
        payload: id
      })
    )
    .then(res => { })
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
