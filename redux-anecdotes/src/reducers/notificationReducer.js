import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        message: "",
        id: 0,
    },
    reducers: {
        setNotification(state, action) {
            state.message = action.payload.message;
            state.id = action.payload.id;
        },
        clearNotification(state) {
            state.message = "";
            state.id = 0;
        },
    },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export const setNotificationWithTimeout = (message, timeout) => {
    return async (dispatch, getState) => {
        const id = getState().notification.id + 1;
        dispatch(setNotification({ message, id }));
        setTimeout(() => {
            if (getState().notification.id === id) {
                dispatch(clearNotification());
            }
        }, timeout * 1000);
    };
};

export default notificationSlice.reducer;
