import {
    FETCH_NEWS
} from "../actions/news";

const INITIAL_STATE = {
    list: [{
        
            category_name: "Entertainment",
            title: 'RRR joins 1 crore box office',
            description: "Alia Bhatt, NTR, Ajay Devgan, Ram Charan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            is_exclusive: false,
            published_date: "11/1/2022",
            user_name: "Pooja"
          
    },
    {
        
            category_name: "Entertainment",
            title: 'RRR joins 1 crore box office',
            description: "Alia Bhatt, NTR, Ajay Devgan, Ram Charan Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            is_exclusive: false,
            published_date: "11/1/2022",
            user_name: "Pooja"
    
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