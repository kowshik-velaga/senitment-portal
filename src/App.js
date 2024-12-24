import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import SentimentChart from "./components/SentimentChart";

const App = () => {
  const [analysisResults, setAnalysisResults] = useState([]);

  return (
    <div>
      <h1>Sentiment Analysis Portal</h1>
      <FileUploader setAnalysisResults={setAnalysisResults} />
      {analysisResults.length > 0 && <SentimentChart results={analysisResults} />}
    </div>
  );
};

export default App;
