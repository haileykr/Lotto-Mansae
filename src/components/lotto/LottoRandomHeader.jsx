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
    const [latestWeek, setLatestWeek] = useState(-1);

    useEffect(() => {

        const getWeek = () => {
            const t1 = new Date('December, 7, 2002');
            const t2 = new Date();
          
            const dff = (t2.getTime() - t1.getTime())
            return parseInt(dff/ (24*3600*1000*7));
        }
        let week = getWeek();





        setLatestWeek(week);
          
        axios.get("https://cors-everywhere-hh.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo="+week)
        .then((res)=>{
            console.log(res);
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
            <h2>
                Latest Numbers - from Week {latestWeek}
            </h2>
            <LottoBoxComponent
                lottoNumber= {lottoNumber}
            />
        
        </LottoRandomHeaderBox>
    );
}

export default LottoRandomHeader;