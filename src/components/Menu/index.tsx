import React from 'react';
import { ConnectedProps, connect } from 'react-redux';

import styles from './styles.module.css';
import { createNote } from '../../store/menu/epics';
import {
    selectNoteSize,
    selectNoteColor,
    NoteDefaultSizes,
    NoteColors,
} from '../../store/menu/slice';
import { ColorRadio } from '../ColorRadio';
import { Radio } from '../Radio';

type Props = ConnectedProps<typeof connector>;

const Menu = (props: Props) => {
    const onSizeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        props.selectNoteSize(NoteDefaultSizes[e.target.value as NoteDefaultSizes]);
    const onColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        props.selectNoteColor(e.target.value);
    return (
        <div className={styles.Menu_root}>
            <h3>Select Note Size:</h3>
            <div>
                <Radio
                    name="size"
                    value={NoteDefaultSizes.SMALL}
                    onChange={onSizeChange}
                    defaultChecked
                >
                    Small
                </Radio>
                <Radio name="size" value={NoteDefaultSizes.MEDIUM} onChange={onSizeChange}>
                    Medium
                </Radio>
                <Radio name="size" value={NoteDefaultSizes.LARGE} onChange={onSizeChange}>
                    Large
                </Radio>
            </div>

            <h3>Select Note Color:</h3>
            <div>
                <ColorRadio color={NoteColors.YELLOW} onChange={onColorChange} defaultChecked />
                <ColorRadio color={NoteColors.GREEN} onChange={onColorChange} />
                <ColorRadio color={NoteColors.LAVENDER} onChange={onColorChange} />
                <ColorRadio color={NoteColors.BLUE} onChange={onColorChange} />
            </div>

            <button className={styles.createButton} onClick={() => props.createNote()}>
                Create Sticker Note
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    createNote,
    selectNoteSize,
    selectNoteColor,
};

const connector = connect(null, mapDispatchToProps);

export default connector(Menu);
