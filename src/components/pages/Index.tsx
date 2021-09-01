import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { setQuizzes } from "./../../actions/quiz";

const useStyles = makeStyles({
    root: {
        textAlign: "center"
    },
    img: {
        width: "20%"
    },
    heading: {
        marginBottom: "2%"
    }
});

const IndexPage: React.FC = () => {

    const classes = useStyles();

    const history = useHistory();

    const dispatch = useDispatch();

    return (
        <Box className={classes.root}>
            <img alt="top1" src="top1.png" className={classes.img} />
            <img alt="top2" src="top2.png" className={classes.img} />
            <Typography variant="h6" className={classes.heading}>クイズメーカー</Typography>
            <Button color="secondary" onClick={() => {
                dispatch(setQuizzes());
                history.push("/question");
            }}>サンプルクイズを開始</Button>
            <Button disabled={true}>クイズをインポート</Button>
            <Button onClick={() => history.push("/edit")}>クイズを作成</Button>
        </Box>
    )
}

export default IndexPage;