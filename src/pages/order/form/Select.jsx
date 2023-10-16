import React from 'react';
import {orderSelectedItems} from "@assets/wordpress";
import {FormControlLabel, Radio, RadioGroup, Stack} from "@mui/material";
const Select = ({value, setValue}) => {
    return (

        <RadioGroup
            value={value}
            onChange={(e) => setValue(e.target.value)}
        >
            <Stack direction={'row'}
                   sx={{
                       width: '100%'
                   }}
                   justifyContent={'center'}
                   spacing={7}
            >
                {orderSelectedItems.map((item, ind) =>
                    <FormControlLabel key={ind} value={item.value} control={<Radio sx={{
                        color: 'red',
                        display: 'flex',
                        justifyContent: 'center',
                        span: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        '&.Mui-checked': {
                            color: '#710505FF',
                            '& .MuiSvgIcon-root:nth-of-type(1)': {
                                fontSize: 20,
                                outline: 'none',
                                background: 'none',
                                path: {
                                    display: 'none'
                                }
                            },
                            '& .MuiSvgIcon-root:nth-of-type(2)': {
                                fill: 'red',
                            },
                        },
                        '& .MuiSvgIcon-root:nth-of-type(1)': {
                            fontSize: 20,
                            outline: '2px solid #D8D3D3',
                            outlineOffset: 4,
                            background: '#D8D3D3',
                            path: {
                                display: 'none'
                            }
                        },
                        '& .MuiSvgIcon-root:nth-of-type(2)': {
                            outline: '2px solid #D8D3D3',
                            outlineOffset: -11,
                            left: 'initial',
                            fontSize: 50,
                            color: '#D8D3D3',
                            path: {
                                width: 20,
                                height: 20
                            }
                        },
                        '& .MuiSvgIcon-root': {
                            borderRadius: '50%',
                            marginRight: 1
                        },
                    }}/>} label={item.title} />
                )}
            </Stack>
        </RadioGroup>
    );
};

export default Select;