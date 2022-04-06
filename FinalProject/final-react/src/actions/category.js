export const FETCH_CATEGORY = "FETCH_CATEGORY";

export function fetchCategory(category) {
    // const {pageNumber: pageNumber, eachNews: news} = params;

    return {
      type: FETCH_CATEGORY,
      payload: category,
    };
}