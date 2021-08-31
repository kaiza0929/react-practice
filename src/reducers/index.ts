import { combineReducers } from "redux";
import { quizReducer } from "./quiz";

export const rootReducer = combineReducers({quizReducer: quizReducer});
export type RootState = ReturnType<typeof rootReducer>;