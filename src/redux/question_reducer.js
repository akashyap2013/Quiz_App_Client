import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            return {
                ...state,
                queue : action.payload
            }
        }
    }
})

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;