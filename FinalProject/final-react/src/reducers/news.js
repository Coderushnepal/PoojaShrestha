import {
    FETCH_NEWS
} from "../actions/news";

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    isNoMore: false,
};

export default function fetchNews(state = INITIAL_STATE, action) {
    switch (action.type) {

      case FETCH_NEWS:
        return action.payload.length === 0
          ? {
              ...state,
              isNoMore: true,
              isLoading: false,
            }
          : {
              ...state,
              list: [...action.payload.data],
              isLoading: false,
            };

        default:
            return state;
    }
}