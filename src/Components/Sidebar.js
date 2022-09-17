export default function Sidebar(props){
    const noteList = props.notes.map((note, index)=> (
        <li key={note.id}
            className={`title ${
                note.id === props.currentNote.id ? "selected-note" : ""
            }`}
            onClick={() =>props.setCurrentNoteId(note.id)}
        >
            <span className="text-snippet">Note {index + 1}</span>
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