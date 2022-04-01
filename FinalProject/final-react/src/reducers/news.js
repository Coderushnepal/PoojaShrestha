import {
    FETCH_NEWS
} from "../actions/news";

const INITIAL_STATE = {
    list: [{
        
            category_id: 1,
            title: 'RRR joins 1 crore box office',
            description: "Alia Bhatt, NTR, Ajay Devgan, Ram Charan",
            is_exclusive: false,
            user_id: 1
          
    }, ],
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
              list: [...state.list, ...action.payload],
            };

        default:
            return state;
    }
}