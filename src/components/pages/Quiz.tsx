import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Box, Typography, Button, List, ListItem, ListItemText } from "@material-ui/core";
import { RootState } from "../../reducers";
import { narrowDown } from "../../actions/quiz";
import { setAnswer } from "../../actions/answer";
import LinkButton from "./../reuses/LinkButton";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        margin: "auto",
        width: "60%",
    },
    list_item_text: {
        textAlign: "center"
    }
});

const QuizPage: React.FC = () => {

    const classes = useStyles();

    const [enable_narrow_down_state, setEnableNarrowDownState] = useState<boolean>(true);
    const [quiz_index_state, setQuizIndexState] = useState<number>(0);

    const history = useHistory();

    const quizzes: Quiz[] = useSelector((state: RootState) => Object.values(state.quizReducer));
    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            {quizzes[quiz_index_state] !== undefined && (   
                <>        
                    <Typography>{(quiz_index_state + 1) + "/" + quizzes.length}</Typography>
                    <Typography variant="h6">{quizzes[quiz_index_state].question}</Typography>
                    <List>
                        {quizzes[quiz_index_state].answer_candidates.map((candidate) => {
                            return (
                                <ListItem key={candidate} className={classes.list_item_text} button onClick={() => {
                                    dispatch(setAnswer({qid: quizzes[quiz_index_state].qid, player_answer: candidate}));
                                    if (quiz_index_state < quizzes.length - 1) {
                                        setQuizIndexState(quiz_index_state + 1);
                                        setEnableNarrowDownState(true);
                                    } else {
                                        history.push("/result");
                                    }
                                }}>
                                    <ListItemText key={candidate + "_text"}>{candidate}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button color="secondary" disabled={enable_narrow_down_state === true ? false : true} onClick={() => {
                        dispatch(narrowDown(quizzes[quiz_index_state].qid));
                        setEnableNarrowDownState(false);
                    }}>50:50</Button>
                </>
            )}
            <LinkButton path="/" text="中止" />
        </Box>
    );
}

export default QuizPage;
