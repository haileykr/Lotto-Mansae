import React, {useCallback, useEffect, useState} from 'react'
import * as axios from 'axios';
import LottoBoxComponent from './lotto-box/LottoBoxComponent';
import moment from 'moment';

import styled from 'styled-components';

const LottoRandomHeaderBox = styled.div`
    margin-top: 50px;
    text-align: center;
    width: 100%;
    height: 100%;
    border: 1px solid #aeaeae;
    display:flex;
    flex-direction:column;
`;

const LottoRandomHeader = () => {
    const [lottoNumber, setLottoNumber] = useState([])
    const [drwNo,setDrwNo] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:5000/lottos/last").then((res)=>{
            const data = res.data;
            console.log(data)
            if (data) {
                const nums = [];
                nums.push(data.drwtNo1);
                nums.push(data.drwtNo2);
                nums.push(data.drwtNo3);
                nums.push(data.drwtNo4);
                nums.push(data.drwtNo5);
                nums.push(data.drwtNo6);
                nums.push(data.bnusNo);
                console.log(nums)
                setLottoNumber(nums);
                setDrwNo(data.drwNo);
            }
        })
    }, []);

    return (
        <LottoRandomHeaderBox>
            <h1>
                Lotto Random Generator
            </h1>
            <LottoBoxComponent
                lottoNumber= {lottoNumber}
            />
        
        </LottoRandomHeaderBox>
    );
}

export default LottoRandomHeader;