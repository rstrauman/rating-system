function Dialog(props) {
    return (
        <div className={props.isOpen ? "open" : "close"}>
            <h2>Dialog Box</h2>
            <button className="close" onClick={props.closeDialog}>Close Dialog</button>
        </div>
    );
}

export default Dialog;