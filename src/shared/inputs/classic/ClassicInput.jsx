import React, {useMemo} from 'react';
import {styled, TextField} from "@mui/material";

const FormTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: '#d72323',
        borderWidth: 2,
    },
    '& input + fieldset': {
        border: '2px solid #fff',
        borderRadius: '10px',
    },
    '& input': {
        color: '#000',
        fontSize: '18px',
        padding: '0px 0px 5px 50px',
        autoComplete: 'off'
    },
    '& label': {
        color: '#747474',
        paddingLeft: '50px',
        top: '-8px',
        transformOrigin: 'center'
    },
    '& label.Mui-focused': {
        color: '#747474',
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'none',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'transparent',
    },
    '& .MuiInputLabel-shrink': {
    },
});

const ClassicInput = ({children, disablePx}) => {

    const sx = useMemo(() => {
        if (disablePx) {
            return {
                '& label': {
                    paddingLeft: '0px',
                    left: '0px',
                    transformOrigin: 'left',
                },
                '& label.Mui-focused': {
                    transform: 'translate(3px, -1.5px) scale(0.75)',
                    left: '0px',
                    transformOrigin: 'left',
                },
                '& input': {
                    padding: `0px 0px 5px 5px`,
                },
            }
        }
    }, [disablePx]);
    return (
        <FormTextField
            inputProps={{
                autoComplete: 'off',
            }}
            sx={sx}
            variant={'standard'} label={children} fullWidth={true}/>
    );
};

export default ClassicInput;