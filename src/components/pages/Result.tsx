import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import QuizTable from "./../reuses/QuizTable";
import { RootState } from "./../../reducers";

const useStyles = makeStyles({
    root: {
        margin: "auto",
        width: "90%"
    },
    flexbox: {
        display: "flex"
    }
})

const ResultPage: React.FC = () => {

    const classes = useStyles();

    const history = useHistory();

    const quizzes = useSelector((state: RootState) => state.quizReducer.quizzes);

    return (
        <Box className={classes.root}>
            <QuizTable quizzes={quizzes} result={true} />
            <Box className={classes.flexbox}>
                <Typography>{Object.values(quizzes).length + "問中" + Object.values(quizzes).filter((quiz) => (quiz as Quiz).right === true).length + "問正解"}</Typography>
                <Button onClick={() => history.push("/")}>トップに戻る</Button>
            </Box>
        </Box>
    )

}

export default ResultPage;