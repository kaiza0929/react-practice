import { AnyAction } from "redux";
import { SET_QUIZZES_ACTION_TYPE, SET_RIGHT_OR_WRONG_ACTION_TYPE, NARROW_DOWN_ACTION_TYPE } from "./../actions/quiz";

type State = {
    quizzes: Quizzes,
}

export const quizReducer = (state: State = {quizzes: {}}, action: AnyAction) => {

    let quiz: Quiz;

    switch (action.type) {
        case (SET_QUIZZES_ACTION_TYPE as string):
            return {quizzes: action.payload.quizzes}
        case (SET_RIGHT_OR_WRONG_ACTION_TYPE as string):
            quiz = state.quizzes[action.payload.qid];
            quiz.right = action.payload.right;
            return {quizzes: {...state.quizzes, [action.payload.qid]: quiz}}
        case (NARROW_DOWN_ACTION_TYPE as string):
            quiz = state.quizzes[action.payload.qid];
            quiz.answer_candidates = quiz.answer_candidates.filter((candidate, index: number) => candidate === quiz.answer_entity || index % 2 == 0);
            return {quizzes: {...state.quizzes, [action.payload.qid]: quiz}}
        default:
            return state;
    }

}