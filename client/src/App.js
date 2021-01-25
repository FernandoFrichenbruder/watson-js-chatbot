import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Chat from "./components/Chat";
import { createSession } from "./actions/watson";
import axios from "axios";

if (localStorage.session) {
  const session = localStorage.session;
  localStorage.clear();
  delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = session;
} else {
  localStorage.clear();
  delete axios.defaults.headers.common["session_id"];
}

const App = () => {

  useEffect(() => {
    if (!localStorage.session) {
      store.dispatch(createSession());
    }
    
  });

  return (
    <Provider store={store}>
      <div className="container">
        <Chat />
      </div>
    </Provider>
  );
};

export default App;