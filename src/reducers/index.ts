import { combineReducers } from "redux";
import { quizReducer } from "./quiz";
import { answerReducer } from "./answer";

export const rootReducer = combineReducers({quizReducer: quizReducer, answerReducer: answerReducer});
export type RootState = ReturnType<typeof rootReducer>;