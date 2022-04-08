import * as newsService from "../services/news.js"

export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_PENDING = "FETCH_NEWS_PENDING";
export const FETCH_NEWS_REJECTED = "FETCH_NEWS_REJECTED";
export const FETCH_NEWS_FULFILLED = "FETCH_NEWS_FULFILLED"

export function fetchNews(news) {

  return async function (dispatch) {
    dispatch(fetchNewsPending());

    try {
      const data = await newsService.fetchNews(news);

      dispatch(fetchNewsFulfilled(data));
    } catch (err) {
      dispatch(fetchNewsRejected(err));
    }
  };
}

function fetchNewsFulfilled(news) {
  return {
    type: FETCH_NEWS_FULFILLED,
    payload: news,
  };
}

function fetchNewsRejected(err) {
  return {
    type: FETCH_NEWS_REJECTED,
    payload: err,
  };
}

function fetchNewsPending() {
  return {
    type: FETCH_NEWS_PENDING,
  };
}
