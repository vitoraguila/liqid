import {
  SURVEYS_STORE,
  SURVEYS_STORE_SUCCESS,
  SURVEYS_STORE_FAILURE,
  SURVEYS_STORE_RESET
} from '../constants/actionTypes';

export const saveSurvey = (data, type) => async dispatch => {
  dispatch({
    type: SURVEYS_STORE,
    payload: {
      loading: true
    }
  });

  try {
    dispatch({
      type: SURVEYS_STORE_SUCCESS,
      payload: {
        surveys: null
      }
    });
  } catch (err) {
    dispatch({
      type: SURVEYS_STORE_FAILURE,
      payload: {
        message: err.message,
        loading: false
      }
    });
  }
};

export const resetSurveys = () => async dispatch => {
  dispatch({
    type: SURVEYS_STORE_RESET,
    payload: {
      loading: false,
      data: null
    }
  });
};
