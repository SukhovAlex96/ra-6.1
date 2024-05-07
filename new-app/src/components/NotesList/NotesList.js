import Note from "../Note/Note";


function NotesList({ notes, deleteNote }) {

    const elements = notes.map((note) => {
        const { id } = note;
        return <Note key={id} note={note} onDelete={() => deleteNote(id)} />;
    });

    return (
        <div className='mb-5 d-flex flex-wrap justify-content-start align-items-start'>
            {elements}
        </div>
    );
}

export default NotesList;