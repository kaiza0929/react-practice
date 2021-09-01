import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, Box, Typography,  Button } from "@material-ui/core";
import QuizTable from "./../reuses/QuizTable";
import { RootState } from "./../../reducers";
import { resetAnswers } from "./../../actions/answer";

const useStyles = makeStyles({
    root: {
        margin: "auto",
        width: "90%",
        marginBottom: "3%"
    },
    typography: {
        textAlign: "center",
        marginBottom: "1.5%"
    },
    buttonbox: {
        textAlign: "center"
    }
})

const ResultPage: React.FC = () => {

    const classes = useStyles();

    const history = useHistory();

    const quizzes = useSelector((state: RootState) => state.quizReducer);
    const answers = useSelector((state: RootState) => state.answerReducer);
    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <Typography className={classes.typography}>結果</Typography>
            <QuizTable quizzes={quizzes} answers={answers} />
            <Box className={classes.buttonbox}>
                <Button onClick={() => {
                    dispatch(resetAnswers());
                    history.push("/");
                }}>トップに戻る</Button>
            </Box>
        </Box>
    )

}

export default ResultPage;
