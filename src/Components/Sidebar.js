export default function Sidebar(){
    return(
        <section className="sidebar">
            <div className="sidebar__header">
                <h1 className="sidebar__header-logo">Notes</h1>
                <button className="sidebar__header-btn">+</button>
            </div>
            <ul className="note-list">
                <li>Note 1</li>
                <li>Note 2</li>
                <li>Note 3</li>
            </ul>
        </section>
    )
}