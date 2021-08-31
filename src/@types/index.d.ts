/* @typsディレクトリにある型定義ファイルは自動で読み込まれる */

type Quiz = {
    qid: string;
    question: string;
    answer_candidates: string[];
    answer_entity: string;
    correct?: boolean;
}

type Quizzes = {
    [qid: string]: Quiz
}