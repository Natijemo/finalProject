import "./App.css";
import Navbar from "./component/Navbar/navbar";
import Login from "./component/Login/login";
import Footer from "./component/Footer/footer";
import SignUP from "./component/SignUp/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import homePage from "./pages/HomePage/homePage";
import Courses from "./pages/Courses/courses";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="body">
          <Navbar />
          <Switch>
            <Route path="/" exact component={homePage} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignUP} />
            <Route path="/courses" exact component={Courses} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
