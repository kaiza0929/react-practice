import { useState } from "react";
import { makeStyles, Box, Typography, TextField, Button } from "@material-ui/core";
import QuizTable from "./../reuses/QuizTable";

const useStyles = makeStyles({
    textfield: {
        width: "90%"
    }
})

const EditPage: React.FC = () => {

    const classes = useStyles();

    const init_new_quiz_state = {question: "", joined_answer_candidates: "", answer_entity: ""}

    const [new_quiz_state, setNewQuizState] = useState<{question: string, joined_answer_candidates: string, answer_entity: string}>(init_new_quiz_state);
    const [quizzes_state, setQuizzesState] = useState<Quizzes>({});

    const setTextfieldValue = (e: React.ChangeEvent<HTMLInputElement>) => setNewQuizState({...new_quiz_state, [e.currentTarget.name]: e.currentTarget.value}); 

    return (
        <Box>
            <Typography>まんち！</Typography>
            <TextField name="question" value={new_quiz_state.question} className={classes.textfield} label="問題文" onChange={setTextfieldValue} />
            <TextField name="joined_answer_candidates" value={new_quiz_state.joined_answer_candidates} className={classes.textfield} label="選択肢(複数可 ,区切りで入力)" onChange={setTextfieldValue} />
            <TextField name="answer_entity" value={new_quiz_state.answer_entity} className={classes.textfield} label="正解" onChange={setTextfieldValue} />
            <Button onClick={() => {
                const answer_candidates: string[] = new_quiz_state.joined_answer_candidates.split(",");
                if (answer_candidates.length < 2) {
                    return;
                } else {
                    const qid: string = Math.random().toString(36).substring(2);
                    setQuizzesState({...quizzes_state, [qid]: {
                        qid: qid, question: new_quiz_state.question, answer_candidates: answer_candidates, answer_entity: new_quiz_state.answer_entity
                    }});
                    setNewQuizState(init_new_quiz_state);
                }
            }}>問題を追加</Button>
            <QuizTable quizzes={quizzes_state} />
        </Box>
    )
}

export default EditPage;