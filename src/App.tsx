import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { theme } from "./theme";
import Header from "./components/commons/Header";
import IndexPage from "./components/pages/Index";
import QuestionPage from "./components/pages/Question";
import ResultPage from "./components/pages/Result";
import EditPage from "./components/pages/Edit";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header />
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/question" component={QuestionPage} />
                <Route exact path="/result" component={ResultPage} />
                <Route exact path="/edit" component={EditPage} />
            </Router>
        </ThemeProvider>
    );
}

export default App;