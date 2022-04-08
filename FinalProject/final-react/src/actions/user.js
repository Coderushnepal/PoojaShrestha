export const FETCH_USER = "FETCH_USER";

export function fetchUser(user) {

    return {
      type: FETCH_USER,
      payload: user,
    };
}