import React, { useState, useCallback } from "react";

import LottoBoxComponent from "./lotto-box/LottoBoxComponent";
import styled from "styled-components";

const LottoRandomContentBox = styled.div`
  width: 70%;
  height: 1000px;
  display: inline-block;
  border-radius: 15px;
  border: 2px solid lightgreen;
  overflow: scroll;
`;

const RandomButton = styled.button`
  min-width: 100px;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 15px;
  border: none;

  color: white;
  cursor: pointer;
  background-color: lightblue;
`;

const LottoRandomContent = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const handleButtonClick = useCallback(() => {
    const lottoNumber = [];
    while (lottoNumber.length < 7) {
      const newNumber = Math.floor(Math.random() * 45) + 1;

      if (!lottoNumber.includes(newNumber)) {
        lottoNumber.push(newNumber);
      }
    }

    lottoNumber.sort((a, b)=>a-b)
    setLottoNumbers([...lottoNumbers, lottoNumber]);
  });

  return (
    <LottoRandomContentBox>
      {lottoNumbers.map((lottoNumber, i) => (
        <LottoBoxComponent key={i} lottoNumber={lottoNumber} />
      ))}
      <RandomButton onClick={handleButtonClick}>
        Generate Random Numbers
      </RandomButton>
    </LottoRandomContentBox>
  );
};

export default LottoRandomContent;
