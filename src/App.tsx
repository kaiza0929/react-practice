import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { theme } from "./theme";
import Header from "./components/commons/Header";
import IndexPage from "./components/pages/Index";
import SettingPage from "./components/pages/Setting";
import QuizPage from "./components/pages/Quiz";
import ResultPage from "./components/pages/Result";
import EditPage from "./components/pages/Edit";
import { store } from "./store";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/setting" component={SettingPage} />
                    <Route exact path="/quiz" component={QuizPage} />
                    <Route exact path="/result" component={ResultPage} />
                    <Route exact path="/edit" component={EditPage} />
                </Router>
            </ThemeProvider>
        </Provider>
    );
}

export default App;