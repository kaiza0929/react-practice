/* @typsディレクトリにある型定義ファイルは自動で読み込まれる */

type Hash<T> = {
    [qid: string]: T;
}

type Quiz = {
    qid: string;
    question: string;
    answer_candidates: string[];
    answer_entity: string;
}

type Answer = {
    qid: string;
    player_answer;
}

