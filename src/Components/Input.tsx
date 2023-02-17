import React, {ChangeEvent} from 'react';

type InputType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}
export const Input = (props: InputType) => {


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }

    return (
        <input value={props.newTitle} onChange={onChangeInputHandler}/>
    )
}