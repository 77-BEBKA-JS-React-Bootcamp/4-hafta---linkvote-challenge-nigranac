import "./App.css";
import { AddLink, Header, Items, Product, Submit } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import initialState from "./context/store";
import reducer from "./context/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import store from "./context/store";

// const store = createStore(reducer, initialState, composeWithDevTools());
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <div className="items">
                <Submit />
                <Product />
                <Items />
              </div>
            </div>
          </Route>
          <Route path="/add">
            <AddLink />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
