import React from 'react';

import ArticleProvider from "./contexts/ArticleContext";
import Articles from "./containers/Articles";
import AddArticle from "./components/AddArticle";

function App() {
  return (
    <ArticleProvider>
      <Articles></Articles>
      <AddArticle></AddArticle>
    </ArticleProvider>
  );
}

export default App;
