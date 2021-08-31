import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { RootState } from "./../../reducers";
import { setRightOrWrong, narrowDown } from "./../../actions/quiz";

const useStyles = makeStyles({
    root: {
        width: "90%",
        margin: "auto"
    },
    answer_button_box: {
        textAlign: "center",
        width: "40%",
        display: "flex",
        flexWrap: "wrap"
    }
});

const QuestionPage: React.FC = () => {

    const classes = useStyles();

    const [state, setState] = useState<{selected_index: number, enable_narrow_down: boolean}>({selected_index: 0, enable_narrow_down: true});

    const history = useHistory();

    /* dispatchはインデックスページで行われるので、問題ページに直接アクセスすると空のオブジェクトになる。 */
    const quizzes: Quiz[] = useSelector((state: RootState) => Object.values(state.quizReducer.quizzes));
    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <Box>
                <Typography>{quizzes[state.selected_index].question}</Typography>
                <Box className={classes.answer_button_box}>
                    {quizzes[state.selected_index].answer_candidates.map((candidate) => {
                        return ( <Button onClick={() => {
                            dispatch(setRightOrWrong(quizzes[state.selected_index].qid, candidate === quizzes[state.selected_index].answer_entity));
                            if (state.selected_index < quizzes.length - 1) {
                                setState({...state, selected_index: state.selected_index + 1});
                            } else {
                                history.push("/result");
                            }
                        }}>{candidate}</Button> );
                    })}
                </Box>
            </Box>
            <Button disabled={state.enable_narrow_down === true ? false : true} onClick={() => {
                dispatch(narrowDown(quizzes[state.selected_index].qid));
                setState({...state, enable_narrow_down: false});
            }}>50:50</Button>
            <Button onClick={() => history.push("/")}>中断</Button>
        </Box>
    );
}

export default QuestionPage;