import React, {useCallback, useEffect, useState} from 'react'
import * as axios from 'axios';
import LottoBoxComponent from './lotto-box/LottoBoxComponent';
import moment from 'moment';
import './LottoRandomHeader.css';

const LottoRandomHeader = ({}) => {
    const [lottoNumber, setLottoNumber] = useState([])
    const [drwNo,setDrwNo] = useState(0);

    const getWeek = useCallback(() => {
        const t1 = moment('20021207');
        const t2 = moment();
        const dff = moment.duration(t2.diff(t1)).asDays();
        return Math.floor(dff/7)+1;
    }, []);
    const week = getWeek();


    useEffect(() => {
        axios.get("https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo="+week).then((res) => {
            const data = res.data;
            console.log(data);
            if (data) {
                const nums = [];
                nums.push(data.drwNo1);
                nums.push(data.drwNo2);
                nums.push(data.drwNo3);
                nums.push(data.drwNo4);
                nums.push(data.drwNo5);
                nums.push(data.drwNo6);
                nums.push(data.bnusNo);
                setLottoNumber(nums);
                setDrwNo(data.drwNo);
            }
        })
    }, []);

    return (
        <div className="lotto-random-header">
            <div className="lotto-title">
                Lotto Random Generator
                <span>{drwNo}</span>
            </div>
            <div>
                <LottoBoxComponent
                    lottoNumber= {lottoNumber}
                />
            </div>
        </div>
    );
}

export default LottoRandomHeader;