
import styled from 'styled-components';

export const LottoBox = styled.div`
    display: flex;
    margin: 20px;
    padding-left: 25px;
`;

export const LottoBoxNumber = styled.div`    width: 40px;
    height: 40px;
    border: none;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
    border-radius: 50%;

    background-color: #90e0ef;

    &:first-child {

        background-color: #ffadad;
    }

    &:nth-child(2){

        background-color: #fdffb6;
    }

    &:nth-child(3){

        background-color: #caffbf;
    }

    &:nth-child(4){
        background-color:#a0c4ff;
    }
    &:nth-child(5){
        background-color: #bdb2ff;
    }
    &:nth-child(6){

        background-color: #ffc6ff;
    }
`;

export const LottoBoxPlus = styled.div`
    width: 40px;
    height: 40px;
    margin: 8px;
    text-align: center;
    font-size: 30px;
`;