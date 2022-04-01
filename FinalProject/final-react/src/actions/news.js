export const FETCH_NEWS = "FETCH_NEWS";

function fetchNews(news) {
    return {
      type: FETCH_NEWS,
      payload: news,
    };
  }