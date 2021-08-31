import { useMemo } from "react";
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginBottom: "3%"
    }
});

const QuizTable: React.FC<{quizzes: Quizzes}> = ({ quizzes }) => {

    const classes = useStyles()

    return useMemo(() => (

        <TableContainer className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>問題文</TableCell>
                        <TableCell>選択肢</TableCell>
                        <TableCell>正解</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 親コンポーネント側で配列に変形したオブジェクトを渡すとpropsの値が変化したかに関係なく再描画される(参照先が変わるから?) */}
                    {Object.values(quizzes).map((quiz) => {
                        return (
                            <TableRow>
                                <TableCell>{quiz.question}</TableCell>
                                <TableCell>{quiz.answer_candidates.join(" ")}</TableCell>
                                <TableCell>{quiz.answer_entity}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    ), [quizzes, classes]);

}

export default QuizTable;