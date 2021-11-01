import React, { Component } from "react";

import LottoRandomHeader from "./lotto/LottoRandomHeader";
import LottoRandomContent from "./lotto/LottoRandomContent";

import styled from "styled-components";
import LottoChart from "./lotto/LottoChart";

const LottoRandomTemplateBox = styled.div`
  margin: auto;
  width: auto;
  min-height: 100vh;

  h1 {
    text-align: center;
  }
`;

const LottoRandomMain = styled.div`
  width: auto;

  .side {
    display: flex;
  }
`;

class LottoRandomTemplate extends Component {
  render() {
    return (
      <LottoRandomTemplateBox>
        <h1>Lotto for Fun!</h1>
        <LottoRandomHeader />

        <LottoRandomMain>
          <h1> Random Generator </h1>

          <LottoChart />
          <div className="side">
            <LottoRandomContent />
          </div>
        </LottoRandomMain>
      </LottoRandomTemplateBox>
    );
  }
}

export default LottoRandomTemplate;
