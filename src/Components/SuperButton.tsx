import React from 'react';

type PropsType = {
    callBack: () => void
    name: string
}
export const SuperButton = (props:PropsType) => {

    const onClickhandler = () => {
        props.callBack()
    }

    return <button onClick={onClickhandler}>{props.name}</button>
}