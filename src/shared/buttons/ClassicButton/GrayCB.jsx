import React, {useState} from 'react';
import ClassicButton from "@shared/buttons/ClassicButton/ClassicButton";

const GrayCB = ({discount, ...props}) => {
    return (
        <ClassicButton
            {...props}
            discount={discount}
            color={'#000'}
            hoverBgColor={'#d5d5d5'}
            hoverShadow={'shadow-md shadow-gray-400'}
            bgColor={'#F0EFEF'}

        >
            {props.children}
        </ClassicButton>
    );
};

export default GrayCB;