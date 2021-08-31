/* srcディレクトリ内のファイルしか読み込めない */
import default_quizzes from "./../assets/default_quiz.json";

export const SET_QUIZZES_ACTION_TYPE = "SET_QUIZZES";
export const COLLATION_ANSWER_ACTION_TYPE = "COLLATION_ANSWER";

export const setQuizzes = (quizzes: Quizzes = default_quizzes) => {

    let ids = Object.keys(quizzes);
    let selected_quizzes: Quizzes = {}

    for (let i = 0; i <= 10; i++) {
        const index = Math.floor(Math.random() * ids.length);
        selected_quizzes[quizzes[ids[index]].qid] = quizzes[ids[index]];
        ids.splice(index, 1);
    }

    return {
        type: SET_QUIZZES_ACTION_TYPE,
        payload: {
            quizzes: selected_quizzes
        }
    }

}