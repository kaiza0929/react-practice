export const SET_ANSWER_ACTION_TYPE = "SET_ANSWER";
export const RESET_ANSWERS_ACTION_TYPE = "RESET_ANSWERS";

export const setAnswer = (answer: Answer) => {
    return {
        type: SET_ANSWER_ACTION_TYPE,
        payload: {
            answer: answer
        }
    }
}

export const resetAnswers = () => {
    return {
        type: RESET_ANSWERS_ACTION_TYPE
    }
}