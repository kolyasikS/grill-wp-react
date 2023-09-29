import React, {useState} from 'react';
import styles from './index.module.scss';
const ClassicButton = ({children, color,
                           hoverColor = color,
                           hoverBgColor,
                           hoverShadow,
                           width,
                           bgColor,
                           borderRadius = 55,
                           py = 16,
                           px = 24, border,
                           uppercase = true,
                           discount, fontFamily,
                           fontWeight = 800,
                           display, className,
                           fontSize = 16,
                        }) => {
    const discountStyle = discount && (discount.type === 'black' ? {
        value: discount.value,
        bgColor: '#000',
        color: '#fff'
    } : {
        value: discount.value,
        bgColor: '#BC1922',
        color: '#fff'
    });
    const [bg, setBg] = useState(bgColor);
    const [colorState, setColor] = useState(color);
    return (
        <button className={`${styles.button} ${className} ${bg !== bgColor ? hoverShadow : ''}`}
                onMouseEnter={() => {
                    setBg(hoverBgColor);
                    setColor(hoverColor)
                }}
                onMouseLeave={() => {
                    setBg(bgColor)
                    setColor(color)
                }}
                style={{
                    display,
                    width,
                    background: bg,
                    borderRadius,
                    paddingLeft: px,
                    paddingRight: px,
                    paddingTop: py,
                    paddingBottom: py,
                    border,
                }}
        >
            {discountStyle &&
                <span
                    style={{
                        background: discountStyle.bgColor,
                        color: discountStyle.color
                    }}
                    className={styles.discount}
                >
                    <p>-{discountStyle.value}%</p>
                </span>
            }
            <p style={{
                color: colorState,
                fontFamily,
                fontWeight,
                fontSize,
                lineHeight: '100%',
                textTransform: uppercase ? 'uppercase' : 'none'
            }}>
                {children}
            </p>
        </button>
    );
};

export default ClassicButton;