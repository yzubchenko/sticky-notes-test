import React, { useEffect } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import Menu from '../Menu';
import NoteBoard from '../NoteBoard';
import { fetchNotes } from '../../store/note/epics';

type Props = ConnectedProps<typeof connector>;

const App = (props: Props) => {
    useEffect(() => {
        props.fetchNotes();
    });
    return (
        <>
            <Menu />
            <NoteBoard />
        </>
    );
};

const mapDispatchToProps = {
    fetchNotes,
};

const connector = connect(null, mapDispatchToProps);

export default connector(App);
