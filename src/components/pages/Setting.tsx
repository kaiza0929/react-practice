import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles, Box, Typography, Select, MenuItem, Button, TextField } from "@material-ui/core";
import { setQuizzes } from "./../../actions/quiz";
import { resetAnswers } from "./../../actions/answer";
import LinkButton from "../reuses/LinkButton";

const useStyles = makeStyles({
    root: { 
        textAlign: "center"
    },
    heading: {
        marginBottom: "2%"
    },
    selectbox: {
        marginBottom: "2%"
    }
});

const SettingPage: React.FC = () => {

    const classes = useStyles();

    const [select_value_state, setSelectValueState] = useState<number>(0);
    const [limit_state, setLimitState] = useState<number>(10);

    const dispatch = useDispatch();
    return (
        <Box className={classes.root}>
            <Typography variant="h6" className={classes.heading}>出題設定</Typography>
            <Box className={classes.selectbox}>            
                <Select value={select_value_state} onChange={(e: React.ChangeEvent<{value: unknown}>) => setSelectValueState(e.target.value as number)}>
                    <MenuItem value={0} selected>サンプルクイズから出題</MenuItem>
                    <MenuItem value={1}>アップロードしたクイズから出題</MenuItem>
                </Select>
                <Button color="secondary" disabled={select_value_state === 0 ? true : false} onClick={() => alert("現在使用できません")}>JSONをアップロード</Button>
            </Box>
            <TextField label="問題数" value={limit_state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const limit: number = Number(e.currentTarget.value);
                if (isNaN(limit) === false) {
                    setLimitState(limit);
                }
            }} />
            <LinkButton path="/quiz" text="クイズを開始" clickHandler={() => {
                dispatch(setQuizzes(undefined, limit_state));
                dispatch(resetAnswers());
            }} /> 
        </Box>
    );
}

export default SettingPage;