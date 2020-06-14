import React, { useRef, MutableRefObject } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { RootStore } from '../../store';
import { Note as NoteData } from '../../store/note/types';

import styles from './styles.module.css';
import Note from '../Note';
import { getOrderedNotes } from '../../store/note/getters';
import { checkStopEditingNote } from '../../store/note/epics';
import { applyNoteBoardBoundingRect, setTrashZoneBoundingRect } from '../../store/noteBoard/slice';
import { ResizeCapturer } from '../ResizeCapturer';
import { isTrashZoneActive } from '../../store/noteBoard/getters';

type Props = ConnectedProps<typeof connector>;

const NoteBoard = (props: Props) => {
    const boardRef = useRef() as MutableRefObject<HTMLDivElement>;
    const trashZoneRef = useRef() as MutableRefObject<HTMLDivElement>;

    const trashZoneActiveClass = props.isTrashZoneActive ? styles.trashZoneActive : '';
    return (
        <ResizeCapturer captureRef={boardRef} onResize={props.applyNoteBoardBoundingRect}>
            <div
                ref={boardRef}
                className={styles.NoteBoard_root}
                onClick={() => props.checkStopEditingNote()}
            >
                <ResizeCapturer captureRef={trashZoneRef} onResize={props.setTrashZoneBoundingRect}>
                    <div
                        ref={trashZoneRef}
                        className={`${styles.trashZone} ${trashZoneActiveClass}`}
                    >
                        Drop here to remove
                    </div>
                </ResizeCapturer>
                {props.notes.map((note: NoteData) => (
                    <Note key={note.id} noteId={note.id} />
                ))}
            </div>
        </ResizeCapturer>
    );
};

const mapStateToProps = (state: RootStore) => ({
    notes: getOrderedNotes(state),
    isTrashZoneActive: isTrashZoneActive(state),
});

const mapDispatchToProps = {
    checkStopEditingNote,
    applyNoteBoardBoundingRect,
    setTrashZoneBoundingRect,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NoteBoard);
