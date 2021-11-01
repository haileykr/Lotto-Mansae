import React, { useCallback, useEffect, useState } from "react";
import * as axios from "axios";
import { Bar } from "react-chartjs-2";

import styled from "styled-components";

const LottoChartContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid #aeaeae;
  display: flex;
  flex-direction: row;
`;

const LottoChart = () => {
  const [lottoAll, setLottoAll] = useState(null);

  const onClickCount = useCallback(async () => {
    const records = await axios.get("http://localhost:5000/number-counts");

    const sorted = records.data.sort((a, b) => b - a);
    console.log(records.data);
    setLottoAll(sorted);
  }, []);

  let labels = [];
  let counts = [];

  if (lottoAll) {
    labels = Object.keys(lottoAll);
    counts = Object.values(lottoAll);
  }
  const data = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } };

  return (
    <LottoChartContainer>
      <button onClick={onClickCount}>Click! </button>

      <Bar data={data} options={options} />
    </LottoChartContainer>
  );
};

export default LottoChart;
