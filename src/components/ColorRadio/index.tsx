import React, { ChangeEvent } from 'react';

import styles from './styles.module.css';

type Props = {
    color: string;
    defaultChecked?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ColorRadio = ({ color, defaultChecked, onChange }: Props) => {
    return (
        <div className={styles.ColorRadio_root}>
            <input
                type="radio"
                id={`radio_${color}`}
                className={styles.radio}
                name="color"
                defaultChecked={defaultChecked}
                value={color}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={`radio_${color}`}>
                <span className={styles.radioBody} style={{ backgroundColor: color }}>
                    <span className={styles.checkMark} />
                </span>
            </label>
        </div>
    );
};
