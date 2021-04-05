import {
    getUsers
} from "../api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT";
const SET_FETCHING_TOGGLE = "SET-FETCHING-TOGGLE";
const SET_IS_FOLLOWING_PROGRESS = "SET_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgres: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: false
                        }
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

                        case SET_IS_FOLLOWING_PROGRESS:
                            return {
                                ...state,
                                followingInProgres: action.toggle ? [...state.followingInProgres, action.userId] :
                                    state.followingInProgres.filter(id => id !== action.userId)
                            }
                            default:
                                return state;
    };
};

export default usersReducer;

export const followSucces = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowSucces = (userId) => ({
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

export const toggleFollowingProgress = (toggle, userId) => ({
    type: SET_IS_FOLLOWING_PROGRESS,
    toggle,
    userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsers.getUser(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
}

export const unfollow = (userId) => (dispatch) => {
   getUsers.unfollowUsers(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}

export const follow = (userId) => (dispatch) => {
    getUsers.followUsers(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followSucces(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
}