import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Button } from "@material-ui/core";
import { RootState } from "./../../reducers";

const QuestionPage: React.FC = () => {

    const history = useHistory();

    /* dispatchはインデックスページで行われるので、問題ページに直接アクセスすると空のオブジェクトになる。 */
    const quizzes = useSelector((state: RootState) => state.quizReducer.quizzes);

    return (
        <Box>
            <Typography>まんぎん</Typography>
            <Button onClick={() => history.push("/")}>中断</Button>
            {JSON.stringify(quizzes)}
        </Box>
    );
}

export default QuestionPage;