export const FETCH_NEWS = "FETCH_NEWS";

export function fetchNews(news) {
    // const {pageNumber: pageNumber, eachNews: news} = params;

    return {
      type: FETCH_NEWS,
      payload: news,
    };
}