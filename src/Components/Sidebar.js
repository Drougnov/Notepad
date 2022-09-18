export default function Sidebar(props){
    const noteList = props.notes.map((note)=> (
        <li key={note.id}
            className={`title ${
                note.id === props.currentNote.id ? "selected-note" : ""
            }`}
            onClick={() =>props.setCurrentNoteId(note.id)}
        >
            <span className="text-snippet">{note.body.split('\n')[0]}</span>
            <button className="delete-btn" onClick={(event) => props.deleteNote(event, note.id)}><i class="fa-solid fa-trash"></i></button>
        </li>
    ))
    return(
        <section className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header-logo">Notes</h1>
                <button className="sidebar__header-btn" onClick={props.newNote}>+</button>
            </div>
            <ul className="note-list">
                {noteList}
            </ul>
        </section>
    )
}