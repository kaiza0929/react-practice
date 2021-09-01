import { AnyAction } from "redux";
import { SET_QUIZZES_ACTION_TYPE, NARROW_DOWN_ACTION_TYPE } from "./../actions/quiz";

export const quizReducer = (state: Hash<Quiz> = {}, action: AnyAction): Hash<Quiz> => {

    switch (action.type) {
        case (SET_QUIZZES_ACTION_TYPE as string):
            return action.payload.quizzes;
        case (NARROW_DOWN_ACTION_TYPE as string):
            return {
                ...state, [action.payload.qid]: {
                    ...state[action.payload.qid], answer_candidates: state[action.payload.qid].answer_candidates.filter((candidate, index: number) => candidate === state[action.payload.qid].answer_entity || index % 2 === 0)
                }
            }
        default:
            return state;
    }

}