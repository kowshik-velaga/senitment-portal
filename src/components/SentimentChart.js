import React from "react";
import { Pie } from "react-chartjs-2";

const SentimentChart = ({ results }) => {
  const sentiments = results.reduce(
    (acc, result) => {
      acc[result.sentiment]++;
      return acc;
    },
    { positive: 0, neutral: 0, negative: 0 }
  );

  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        data: [sentiments.positive, sentiments.neutral, sentiments.negative],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default SentimentChart;
