const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS  = "SET-USERS";


let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
        return  {
            ...state,
            users: state.users.map((user) => {
                if(action.userId === user.id) {
                    return {...user, followed: true}
                }
                return user
            })
        };
        

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map((user) => {
                    if(action.userId === user.id) {
                        return {...user, followed: false}
                    }
                    return user
                })
        };

        case 'SET-USERS': {
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }
        }

      default: return state;
    };
};

export default usersReducer;

export const followAC = (userId) => ({
        type: FOLLOW, 
        userId
});

export const unFollowAC = (userId) => ({
    type: UNFOLLOW, 
    userId
});

export const setUserAC = (users) => ({
    type: SET_USERS,
    users,
    
});