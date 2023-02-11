import React from 'react';
import {CurrentBankomat} from './CurrentBankomat';
import {MoneyType} from './App';
import styled from 'styled-components';

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {


    const mappedMoney = props.data.map((el: MoneyType, index) => {
        return (
            <CurrentBankomat
                key={el.number}
                money={el}
            />
        );
    });

// const mappedMoney = props.data.map((el, index) => {
//     return (
//         <div key={index}>{el.banknotes} {el.value}</div>
//
//     );
// });

    return (
        <Wrapper>
            {mappedMoney}

        </Wrapper>
    );
};


const Wrapper = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`