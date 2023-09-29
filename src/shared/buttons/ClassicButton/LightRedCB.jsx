import React from 'react';
import ClassicButton from "./ClassicButton";

const LightRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#fff'}
            bgColor={'#EE353F'}
            hoverShadow={'shadow-md shadow-red-600'}
            hoverBgColor={'#BC1922'}
        >
            {props.children}
        </ClassicButton>
    );
};

export default LightRedCb;