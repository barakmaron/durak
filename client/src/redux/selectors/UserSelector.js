const getReducer = (state) => state.UserReducer;
export const getUserName = state => getReducer(state).user_name;