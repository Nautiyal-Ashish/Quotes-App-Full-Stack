import React, { Fragment } from "react";
import MainNavigation from "./components/main-navigation/MainNavigation";
import { Route, Routes } from "react-router-dom";
import AllQuotes from "./components/pages/AllQuotes";
import NewQuote from "./components/pages/NewQuote";
import ShowQuote from "./components/pages/ShowQuote";


function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllQuotes />} />
        <Route path="/new" element={<NewQuote />} />
        <Route path='/quotes/:id' element={<ShowQuote />} />
      </Routes>
    </Fragment>
  );
}

export default App;
