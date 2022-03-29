import logo from "./logo.svg";
import react from "react";
import "./App.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import AddAuthor from "./components/AddAuthor";
import ShowAllAuthors from "./components/ShowAllAuthors";
import EditAuthor from "./components/EditAuthor";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ShowAllAuthors}></Route>
          <Route exact path="/create" component={AddAuthor}></Route>
          <Route exact path="/edit/:_id" component={EditAuthor}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
