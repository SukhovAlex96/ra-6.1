function Note({ note, onDelete }) {

    return (
        <div
            className='position-relative me-4 mb-4 p-3 border border-primary border-2'
            style={{ width: '240px', height: '170px' }}
        >
            <div className='position-relative overflow-auto'>{note.content}</div>
            <button
                className='btn btn-outline-danger position-absolute'
                style={{ top: '-12px', right: '-15px' }}
                onClick={onDelete}
            >
                {'\u2718'}
            </button>
        </div>
    );
}

export default Note;