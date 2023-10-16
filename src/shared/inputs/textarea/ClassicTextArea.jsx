import React from 'react';
import {styled, TextField} from "@mui/material";

const FormTextArea = styled(TextField)({
    '& textarea:valid + fieldset': {
        borderColor: '#747474',
        borderWidth: 2,
    },
    '& textarea + fieldset': {
        border: '1px solid rgba(0, 0, 0, 0.42);',
        borderRadius: '10px',
    },
    '& textarea': {
        color: '#747474',
        borderColor: '#747474',
        fontSize: '18px',
        '&::placeholder': {
            color: '#747474',
            opacity: 1
        }
    },
    '& label': {
        color: '#747474',
    },
    '& label.Mui-focused': {
        color: '#747474',
    },
    '& textarea:hover + fieldset': {
        borderColor: '#747474',
        borderWidth: 2,
        borderRadius: '10px',
    },
    '& textarea:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 1,
    },
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            border: '1px solid rgba(0, 0, 0, 0.42);'
        },
        '&.Mui-focused fieldset': {
            border: '1px solid rgba(0, 0, 0, 0.42);'
        },
    }
});

const ClassicTextArea = ({rows, children}) => {
    return (
        <FormTextArea
            multiline={true}
            inputProps={{
                autoComplete: 'off',
            }}
            rows={rows}
            placeholder={children} fullWidth={true}
        />
    );
};

export default ClassicTextArea;