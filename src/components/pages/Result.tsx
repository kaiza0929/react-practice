import { useSelector } from "react-redux";
import { makeStyles, Box, Typography } from "@material-ui/core";
import QuizTable from "./../reuses/QuizTable";
import { RootState } from "./../../reducers";
import LinkButton from "../reuses/LinkButton";

const useStyles = makeStyles({
    root: {
        margin: "auto",
        width: "90%",
    },
    heading: {
        textAlign: "center",
        marginBottom: "1.5%"
    },
    buttonbox: {
        textAlign: "center"
    }
})

const ResultPage: React.FC = () => {

    const classes = useStyles();

    const quizzes = useSelector((state: RootState) => state.quizReducer);
    const answers = useSelector((state: RootState) => state.answerReducer);

    return (
        <Box className={classes.root}>
            <Typography className={classes.heading}>結果</Typography>
            <QuizTable quizzes={quizzes} answers={answers} />
            <Box className={classes.buttonbox}>
                <LinkButton path="/" text="トップに戻る" />
            </Box>
        </Box>
    )

}

export default ResultPage;