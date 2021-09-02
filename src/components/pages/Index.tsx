import { makeStyles, Box, Typography } from "@material-ui/core";
import LinkButton from "./../reuses/LinkButton";

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

    return (
        <Box className={classes.root}>
            <img alt="top1" src="top1.png" className={classes.img} />
            <img alt="top2" src="top2.png" className={classes.img} />
            <Typography variant="h6" className={classes.heading}>クイズメーカー</Typography>
            <LinkButton path="/setting" text="クイズを始める" />
            <LinkButton path="/edit" text="クイズを作成" />
        </Box>
    )
}

export default IndexPage;