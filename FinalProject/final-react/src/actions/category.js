export const FETCH_CATEGORY = 'FETCH_CATEGORY';

export function fetchCategory(category) {
	return {
		type: FETCH_CATEGORY,
		payload: category,
	};
}
