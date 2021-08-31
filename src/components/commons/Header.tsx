import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header: React.FC = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>React App</Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header;