import React from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RootStore } from '../../store';
import { NoteId } from '../../store/note/types';
import { startResizeNote, releaseNote, bringToFrontNote } from '../../store/note/slice';

import styles from './styles.module.css';

type Props = ConnectedProps<typeof connector>;

const NoteResizer = (props: Props) => {
    const { noteId } = props;
    return (
        <div
            className={styles.Stretcher_root}
            onMouseDown={(e) => {
                e.stopPropagation();
                props.bringToFrontNote(noteId);
                props.startResizeNote(noteId);
            }}
            onMouseUp={() => props.releaseNote(noteId)}
            onMouseOut={() => props.releaseNote(noteId)}
            onBlur={() => props.releaseNote(noteId)}
        />
    );
};

const mapStateToProps = (state: RootStore, { noteId }: { noteId: NoteId }) => ({
    noteId,
});

const mapDispatchToProps = {
    startResizeNote,
    bringToFrontNote,
    releaseNote,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteResizer);
