import React, { useEffect, useRef, MutableRefObject } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RootStore } from '../../store';
import { NoteId } from '../../store/note/types';
import { getNoteById, getEditingNoteId } from '../../store/note/getters';
import { checkNeedRemoveNote } from '../../store/note/epics';
import {
    startEditNote,
    updateNoteText,
    bringToFrontNote,
    startMoveNote,
} from '../../store/note/slice';

import styles from './styles.module.css';
import NoteResizer from '../NoteResizer';

type Props = ConnectedProps<typeof connector>;

const Note = (props: Props) => {
    const { note, isActive } = props;
    const { id, text, position, size, color } = note;
    const componentStyle = {
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: color,
    };

    const editableTextRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

    const checkDrop = () => {
        props.checkNeedRemoveNote(id);
    };

    useEffect(() => {
        if (isActive) {
            const textArea = editableTextRef.current;
            textArea.focus();
            textArea.selectionStart = textArea.value.length;
            textArea.selectionEnd = textArea.value.length;
        }
    });

    return (
        <div className={styles.Note_root} style={componentStyle}>
            {isActive ? (
                <textarea
                    ref={editableTextRef}
                    className={styles.editableText}
                    value={text}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => props.updateNoteText({ id, text: e.target.value })}
                />
            ) : (
                <div
                    className={styles.textContainer}
                    onDoubleClick={() => props.startEditNote(id)}
                    onMouseDown={(e) => {
                        props.bringToFrontNote(id);
                        props.startMoveNote({
                            id,
                            pickPosition: { x: e.clientX, y: e.clientY },
                        });
                    }}
                    onMouseUp={checkDrop}
                    onMouseOut={checkDrop}
                    onBlur={checkDrop}
                >
                    {text}
                    <NoteResizer noteId={id} />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state: RootStore, { noteId }: { noteId: NoteId }) => ({
    isActive: noteId === getEditingNoteId(state),
    note: getNoteById(state, noteId),
});

const mapDispatchToProps = {
    startMoveNote,
    startEditNote,
    updateNoteText,
    bringToFrontNote,
    checkNeedRemoveNote,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Note);
