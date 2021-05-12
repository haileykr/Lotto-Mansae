import React, { Component } from 'react'

import LottoBoxComponent from './lotto-box/LottoBoxComponent';





import styled from 'styled-components';


const LottoRandomContentBox = styled.div`
    width: 70%;
    height: 1000px;
    display: inline-block;
    border-radius: 15px;
    border: 2px solid lightgreen;
    overflow:scroll;
`;

class LottoRandomContent extends Component {
    render(){
        const {lottoNumbers}=this.props;
        return (
            <LottoRandomContentBox>
                
                
                
                {lottoNumbers.map((lottoNumber, i) =>
                <LottoBoxComponent
                key = {i}
                lottoNumber={lottoNumber}
                
                />)}
            </LottoRandomContentBox>
        );
    }
}

export default LottoRandomContent;