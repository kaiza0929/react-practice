import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginBottom: "3.5%"
    }
});

const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography>クイズメーカー</Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header;
