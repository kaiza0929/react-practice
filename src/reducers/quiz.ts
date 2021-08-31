import { AnyAction } from "redux";
import { SET_QUIZZES_ACTION_TYPE } from "./../actions/quiz";

export const quizReducer = (state: {quizzes: Quizzes} = {quizzes: {}}, action: AnyAction) => {
    switch (action.type) {
        case (SET_QUIZZES_ACTION_TYPE as string):
            return {quizzes: action.payload.quizzes}
        default:
            return state;
    }
}