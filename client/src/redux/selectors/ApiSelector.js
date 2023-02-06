const getReducer = (state) => state.ApiReducer;
export const getMessage = (state) => getReducer(state).message;
export const getPending = (state) => getReducer(state).pending;
export const getPendingWithLoader = (state) => getReducer(state).pending_with_loader;
export const getSuccessful = (state) => getReducer(state).successful;
export const getFailed = (state) => getReducer(state).failed;