function Dialog(props) {
    return (
        <>
            <div className={props.isOpen ? "overlay" : "close-overlay"}></div>
            <div className={props.isOpen ? "open" : "close"}>
                <h2>Dialog Box</h2>
                <button className="close-btn" onClick={props.closeDialog}>X</button>
            </div>
        </>
    );
}

export default Dialog;