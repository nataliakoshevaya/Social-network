const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS  = "SET-USERS";
const SET_PAGE  = "SET-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_FETCHING_TOGGLE = "SET-FETCHING-TOGGLE"


let initialState = {
    users: [],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
        return  {
            ...state,
            users: state.users.map((user) => {
                if(action.userId === user.id) {
                    return {...user, followed: true}
                }
                return user
            })
        };
        

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
        };

        case SET_USERS: 
            return {
                ...state, 
                users: action.users
            }

        case SET_PAGE: 
          return {
              ...state,
              currentPage: action.currentPage
          }

         case SET_TOTAL_COUNT: 
           return {
               ...state,
               totalUserCount: action.count
           } 

           case SET_FETCHING_TOGGLE: 
           return {
               ...state,
               isFetching: action.toggle
           } 
      default: return state;
    };
};

export default usersReducer;

export const follow = (userId) => ({
        type: FOLLOW, 
        userId
});

export const unFollow = (userId) => ({
    type: UNFOLLOW, 
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users,
    
});

export const setPage = (currentPage) => ({
    type: SET_PAGE,
    currentPage
})

export const setTotalUserCount = (count) => ({
    type: SET_TOTAL_COUNT,
    count
})

export const toggleIsFetching = (toggle) => ({
    type: SET_FETCHING_TOGGLE,
    toggle
})


  