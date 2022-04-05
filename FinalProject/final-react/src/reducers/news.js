import {
    FETCH_NEWS
} from "../actions/news";

const INITIAL_STATE = {
    list: [],
};

export default function fetchNews(state = INITIAL_STATE, action) {
    switch (action.type) {

      case FETCH_NEWS:
        return action.payload.length === 0
          ? {
              ...state,
            }
          : {
              ...state,
              list: [...state.list, ...action.payload.data],
            };

        default:
            return state;
    }
}