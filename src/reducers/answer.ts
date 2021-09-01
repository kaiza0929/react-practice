import { AnyAction } from "redux";
import { SET_ANSWER_ACTION_TYPE, RESET_ANSWERS_ACTION_TYPE } from "./../actions/answer";

export const answerReducer = (state: Hash<Answer> = {}, action: AnyAction): Hash<Answer> => {
    switch (action.type) {
        case (SET_ANSWER_ACTION_TYPE as string):
            return {...state, [action.payload.answer.qid]: action.payload.answer}
        case (RESET_ANSWERS_ACTION_TYPE as string):
            return {}
        default:
            return state;
    }
}