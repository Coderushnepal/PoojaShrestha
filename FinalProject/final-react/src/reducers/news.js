import {
  FETCH_NEWS_FULFILLED,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_REJECTED,
} from "../actions/news";

const INITIAL_STATE = {
    list: [],
    isLoading: false,
    isNoMore: false,
};


export default function fetchNews(state = INITIAL_STATE, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return { ...state, isLoading: true };

    case FETCH_NEWS_FULFILLED:
      console.log(state);
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

    case FETCH_NEWS_REJECTED:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}