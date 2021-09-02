/* srcディレクトリ内のファイルしか読み込めない */
import default_quizzes from "./../assets/default_quiz.json";

export const SET_QUIZZES_ACTION_TYPE = "SET_QUIZZES";
export const NARROW_DOWN_ACTION_TYPE = "NARROW_DOWN";

export const setQuizzes = (quizzes: Hash<Quiz> = default_quizzes, limit: number) => {

    let ids = Object.keys(quizzes);
    let selected_quizzes: Hash<Quiz> = {}

    if (ids.length < limit) {
        limit = ids.length;
    }

    for (let i = 1; i <= limit; i++) {
        const index = Math.floor(Math.random() * ids.length);
        selected_quizzes[quizzes[ids[index]].qid] = quizzes[ids[index]];
        ids.splice(index, 1);
    }

    return {
        type: SET_QUIZZES_ACTION_TYPE,
        payload: {
            quizzes: selected_quizzes,
        }
    }

}

export const narrowDown = (qid: string) => {
    return {
        type: NARROW_DOWN_ACTION_TYPE,
        payload: {
            qid: qid
        }
    }
}