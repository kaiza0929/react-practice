import { Link } from "react-router-dom";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
    link: {
        textDecoration: "none"
    }
});

const LinkButton: React.FC<{path: string, text: string, clickHandler?: Function}> = ({ path, text, clickHandler }) => {

    const classes = useStyles();

    return (
        <Link to={path} className={classes.link}>
            <Button color="secondary" onClick={() => {
                if (clickHandler !== undefined) {
                    clickHandler();
                }
            }}>{text}</Button>
        </Link>
    );

}

export default LinkButton;