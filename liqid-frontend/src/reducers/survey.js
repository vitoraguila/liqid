import {
  SURVEYS_STORE,
  SURVEYS_STORE_SUCCESS,
  SURVEYS_STORE_FAILURE,
  SURVEYS_STORE_RESET
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  message: null,
  data: {
    surveys: null
  }
};

const survey = (state = initialState, action) => {
  switch (action.type) {
    case SURVEYS_STORE:
      return {
        ...state,
        loading: action.payload.loading
      };
    case SURVEYS_STORE_FAILURE:
      return {
        ...state,
        loading: action.payload.loading,
        message: action.payload.message
      };

    case SURVEYS_STORE_SUCCESS: {
      const { surveys } = action.payload;

      return {
        ...state,
        loading: action.payload.loading,
        data: {
          surveys: action.payload.surveys
        }
      };
    }

    case SURVEYS_STORE_RESET: {
      return {
        loading: action.payload.loading,
        data: {
          surveys: null
        }
      };
    }

    default:
      return state;
  }
};

export default survey;
