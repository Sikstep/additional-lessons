import React from 'react';
import PropTypes from 'prop-types';
type PropsType = {
    callBack: () => void
    color: string
    children: React.ReactNode
    size?: 'big'
}

export const SuperButton: React.FC<PropsType> = ( props) => {

    const {callBack, color, children, ...otherProps} = props;
    const onClickHandler = () => {
        callBack()
    }
    console.log(otherProps.size)
    return (
        <div>
    <button onClick={onClickHandler}>{children}</button>
        </div>
    );
};

// export const SuperButton: React.FC<PropsType> = ( {callBack, color, children, ...props} ) => {
//     const onClickHandler = () => {
//         callBack()
//     }
//     console.log(props.size)
//     return (
//         <div>
//             <button onClick={onClickHandler}>{children}</button>
//         </div>
//     );
// };
