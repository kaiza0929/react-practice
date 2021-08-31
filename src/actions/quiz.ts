/* srcディレクトリ内のファイルしか読み込めない */
import default_quizzes from "./../assets/default_quiz.json";

export const SET_QUIZZES_ACTION_TYPE = "SET_QUIZZES";
export const SET_RIGHT_OR_WRONG_ACTION_TYPE = "SET_RIGHT_OR_WRONG";
export const NARROW_DOWN_ACTION_TYPE = "NARROW_DOWN";

export const setQuizzes = (quizzes: Quizzes = default_quizzes, limit: number = 10) => {

    let ids = Object.keys(quizzes);
    let selected_quizzes: Quizzes = {}

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

export const setRightOrWrong = (qid: string, right: boolean) => {
    return {
        type: SET_RIGHT_OR_WRONG_ACTION_TYPE,
        payload: {
            qid: qid,
            right: right
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