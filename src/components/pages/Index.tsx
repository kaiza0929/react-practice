import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

const IndexPage: React.FC = () => {
    return (
        <Box>
            <Typography>まんち！</Typography>
            <Link to="/edit">カスタムクイズ</Link>
        </Box>
    )
}

export default IndexPage;