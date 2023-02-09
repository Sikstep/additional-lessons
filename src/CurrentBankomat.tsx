import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'}>
                {props.money.banknotes}
                {props.money.value}
                {props.money.number}
            </Banknote>
            {/*{props.money.banknotes === 'Dollars' ?*/}
            {/*    <BanknotGreen>*/}
            {/*        {props.money.banknotes}*/}
            {/*        {props.money.value}*/}
            {/*        {props.money.number}*/}
            {/*    </BanknotGreen>*/}
            {/*    : <BanknotBlue>*/}
            {/*        {props.money.banknotes}*/}
            {/*        {props.money.value}*/}
            {/*        {props.money.number}*/}
            {/*    </BanknotBlue>*/}
        </>
    );
};

const Banknote = styled.div`
background-color: ${props => {
    if(props.color==='blue') {
        return 'chartreuse'
    } else {
        return '#61dafb'
    }
}};`

const BanknotGreen = styled.div`
  background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknotBlue = styled.div`
  background-color: #61dafb;
  width: 400px;
  height: 200px;
  margin: 10px;
`