import React, { useMemo, useEffect, useState } from "react";
import * as axios from "axios";
import LottoBoxComponent from "./lotto-box/LottoBoxComponent";

import styled from "styled-components";

const LottoRandomHeaderBox = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 100%;
  height: 100%;
  border: 1px solid #aeaeae;
  display: flex;
  flex-direction: row;
`;

const LottoRandomHeader = () => {
  const [lottoNumber, setLottoNumber] = useState([]);
  const [drwNo, setDrwNo] = useState(0);
  const [latestWeek, setLatestWeek] = useState(-1);

  useEffect(() => {
    const getWeek = () => {
      const t1 = new Date("December, 7, 2002");
      const t2 = new Date();
      const dff = t2.getTime() - t1.getTime();
      return parseInt(dff / (24 * 3600 * 1000 * 7));
    };
    let week = getWeek();

    setLatestWeek(week);

    axios.get("http://localhost:5000/latest").then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      if (data) {
        const nums = data.map((numberItem) => numberItem.number);

        setLottoNumber(nums);
        setDrwNo(data.drwNo);
      }
    });
  }, []);

  const marginStyle = useMemo(() => ({ marginRight: "1rem" }));

  return (
    <LottoRandomHeaderBox>
      <h2 style={marginStyle}>
        Latest Numbers <br /> from Week {latestWeek}
      </h2>
      <LottoBoxComponent lottoNumber={lottoNumber} />
    </LottoRandomHeaderBox>
  );
};

export default LottoRandomHeader;
