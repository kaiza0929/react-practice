import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, Button } from "@material-ui/core";
import { setQuizzes } from "./../../actions/quiz";

const IndexPage: React.FC = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    return (
        <Box>
            <Typography>まんち！</Typography>
            <Button onClick={() => {
                dispatch(setQuizzes());
                history.push("/question");
            }}>クイズを開始</Button>
            <Button onClick={() => history.push("/edit")}>クイズを作成</Button>
        </Box>
    )
}

export default IndexPage;