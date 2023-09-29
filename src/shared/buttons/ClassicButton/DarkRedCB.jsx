import React, {useState} from 'react';
import ClassicButton from "@shared/buttons/ClassicButton/ClassicButton";

const DarkRedCb = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#fff'}
            hoverBgColor={'#EE353F'}
            hoverShadow={'shadow-md shadow-red-400'}
            bgColor={'#BC1922'}

        >
            {props.children}
        </ClassicButton>
    );
};

export default DarkRedCb;