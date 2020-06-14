import React, { ChangeEvent } from 'react';
import styles from './styles.module.css';

type Props = {
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({
    name,
    value,
    defaultChecked,
    onChange,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles.ColorRadio_root}>
            <input
                type="radio"
                id={`radio_${value}`}
                className={styles.radio}
                name={name}
                defaultChecked={defaultChecked}
                value={value}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={`radio_${value}`}>
                <span className={styles.radioBody}>
                    <span className={styles.checkMark} />
                </span>
                <span className={styles.textContainer}>{children}</span>
            </label>
        </div>
    );
};
