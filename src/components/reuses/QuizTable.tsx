import { useMemo } from "react";
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginBottom: "3%",
    }
});

const QuizTable: React.FC<{ quizzes: Hash<Quiz>, answers?: Hash<Answer> }> = ({ quizzes, answers = undefined }) => {

    const classes = useStyles()

    /* フォーム入力の度に再レンダリングするのを防ぐ(クイズが追加された時のみ再レンダリング) */
    return useMemo(() => (

        <TableContainer className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>問題文</TableCell>
                        <TableCell>{answers === undefined ? "選択肢" : "あなたの解答"}</TableCell>
                        <TableCell>正解</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 親コンポーネント側で配列に変形したオブジェクトを渡すとpropsの値が変化したかに関係なく再描画される(参照先が変わるから?) */}
                    {Object.keys(quizzes).map((qid) => {
                        return (
                            <TableRow>
                                <TableCell>{quizzes[qid].question}</TableCell>
                                <TableCell>{answers === undefined ? quizzes[qid].answer_candidates.join(" ") : answers[qid].player_answer}</TableCell>
                                <TableCell>{quizzes[qid].answer_entity}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>

    ), [classes, quizzes, answers]);

}

export default QuizTable;