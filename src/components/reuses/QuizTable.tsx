import { useMemo } from "react";
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";

const QuizTable: React.FC<{quizzes: Quizzes}> = ({ quizzes }) => {
    return useMemo(() => (
        < TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>問題文</TableCell>
                        <TableCell>選択肢</TableCell>
                        <TableCell>正解</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* 親コンポーネント側で配列に変化した値を渡すと再描画しない(参照先が変わるから?) */}
                    {Object.values(quizzes).map((quiz) => {
                        return (
                            <TableRow>
                                <TableCell>{quiz.question}</TableCell>
                                <TableCell>{quiz.answer_candidates.join(" ")}</TableCell>
                                <TableCell>{quiz.answer_entity}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    ), [quizzes]);
}

export default QuizTable;