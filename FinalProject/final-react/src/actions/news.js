export const FETCH_NEWS = "FETCH_NEWS";

export function fetchNews(news) {
    return {
      type: FETCH_NEWS,
      payload: news,
    };
}