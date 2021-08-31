type Quiz = {
    qid: string;
    question: string;
    answer_candidates: string[];
    answer_entity: string
}

type Quizzes = {
    [qid: string]: Quiz
}