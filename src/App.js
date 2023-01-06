import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showResults";
import SyncValidationForm from "./SyncValidationForm";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2 style={{ textAlign: "center" }}>Sign up for Unacademy Plus!</h2>
        <SyncValidationForm onSubmit={showResults} />
      </div>
    </Provider>
  );
};

export default App;
