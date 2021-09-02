import { useState } from "react";
import { makeStyles, Box, Typography, TextField, Button, Link as DownloadLink } from "@material-ui/core";
import QuizTable from "./../reuses/QuizTable";
import LinkButton from "../reuses/LinkButton";

const useStyles = makeStyles({
    root: {
        width: "90%",
        margin: "auto",
        textAlign: "center"
    },
    textfield: {
        width: "90%",
        marginBottom: "1.5%"
    },
    heading: {
        marginBottom: "2%"
    },
    addbutton: {
        marginBottom: "3%"
    },
    linkbox: {
        textAlign: "center",
    }
})

const EditPage: React.FC = () => {

    const classes = useStyles();

    const init_new_quiz_state = {question: "", joined_answer_candidates: "", answer_entity: ""}

    const [new_quiz_state, setNewQuizState] = useState<{question: string, joined_answer_candidates: string, answer_entity: string}>(init_new_quiz_state);
    const [quizzes_state, setQuizzesState] = useState<Hash<Quiz>>({});

    const setTextfieldValue = (e: React.ChangeEvent<HTMLInputElement>) => setNewQuizState({...new_quiz_state, [e.currentTarget.name]: e.currentTarget.value}); 

    return (
        <Box className={classes.root}>
            <Typography variant="h6" className={classes.heading}>クイズを作成</Typography>
            <TextField name="question" value={new_quiz_state.question} className={classes.textfield} label="問題文" onChange={setTextfieldValue} color="secondary" />
            <TextField name="joined_answer_candidates" value={new_quiz_state.joined_answer_candidates} className={classes.textfield} label="選択肢(複数可 ,区切りで入力)" onChange={setTextfieldValue} color="secondary" />
            <TextField name="answer_entity" value={new_quiz_state.answer_entity} className={classes.textfield} label="正解" onChange={setTextfieldValue} color="secondary" />
            <br />
            <Button color="secondary" className={classes.addbutton} onClick={() => {
                const answer_candidates: string[] = new_quiz_state.joined_answer_candidates.split(",");
                if (new Set(answer_candidates).size < 2) {
                    return alert("選択肢は重複なしで2つ以上入力してください");
                } else {
                    const qid: string = Math.random().toString(36).substring(2);
                    setQuizzesState({...quizzes_state, [qid]: {
                        qid: qid, question: new_quiz_state.question, answer_candidates: answer_candidates, answer_entity: new_quiz_state.answer_entity
                    }});
                    setNewQuizState(init_new_quiz_state);
                }
            }}>問題を追加</Button>
            <QuizTable quizzes={quizzes_state} />
            <Box className={classes.linkbox}>
                <DownloadLink color="secondary" style={{marginRight: "1%"}} href={window.URL.createObjectURL(new Blob([JSON.stringify(quizzes_state)], {type: "text/json"}))}>JSONをダウンロード</DownloadLink>
                <LinkButton path="/" text="トップに戻る"></LinkButton>
            </Box>
        </Box>
    )
}

export default EditPage;