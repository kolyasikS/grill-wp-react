import React, {useMemo} from 'react';
import ClassicButton from "./ClassicButton";

const UnfilledCb = ({type = 'dark',
                        borderWidth = 2,
                        ...props}) => {

    const colorSchema = useMemo(() => {
        switch (type) {
            case 'dark':
                return {
                    color: '#000',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #181B3F`,
                    hoverBgColor: '#181B3F',
                    hoverColor: '#fff',
                    hoverShadow: 'shadow-lg shadow-[#0f0f0f]'
                };
            case 'white':
                return {
                    color: '#fff',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #fff`,
                    hoverBgColor: '#fff',
                    hoverColor: '#BC1922',
                    hoverShadow: 'shadow-md shadow-[#dce1e3]'
                }
            case 'red':
                return {
                    color: '#BC1922',
                    bgColor: 'transparent',
                    border: `${borderWidth}px solid #BC1922`,
                    hoverBgColor: '#BC1922',
                    hoverColor: '#fff',
                    hoverShadow: 'shadow-lg shadow-[#6E080E]'
                }
        }
    }, [type, borderWidth])

    return (
        <ClassicButton
            {...props}
            {...colorSchema}
        >
            {props.children}
        </ClassicButton>
    );
};

export default UnfilledCb;