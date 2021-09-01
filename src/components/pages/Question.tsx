import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Box, Typography, Button, List, ListItem, ListItemText } from "@material-ui/core";
import { RootState } from "./../../reducers";
import { narrowDown } from "./../../actions/quiz";
import { setAnswer } from "./../../actions/answer";

const useStyles = makeStyles({
    root: {
        width: "90%",
        margin: "auto",
        textAlign: "center",
        background: "white"
    },
    list_item_text: {
        textAlign: "center"
    }
});

const QuestionPage: React.FC = () => {

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
                                    } else {
                                        history.push("/result");
                                    }
                                    
                                }}>
                                    <ListItemText>{candidate}</ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button disabled={enable_narrow_down_state === true ? false : true} onClick={() => {
                        dispatch(narrowDown(quizzes[quiz_index_state].qid));
                        setEnableNarrowDownState(false);
                    }}>50:50</Button>
                </>
            )}
            <Button onClick={() => history.push("/")}>中断</Button>
        </Box>
    );
}

export default QuestionPage;