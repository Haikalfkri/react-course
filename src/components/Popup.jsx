function Popup({ title }) {
    function confirmHandler() {
        console.log("Confirm");
    }

    function cancelHandler() {
        console.log("Cancel");
    }

    return (
        <>
            <div className="popup">
                <span>{title}</span>
                <div className="popup__btns">
                    <button className="popup__btn" onClick={() => confirmHandler()}>Confirm</button>
                    <button className="popup__btn popup__btn--cancel" onClick={() => cancelHandler()}>Cancel</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
}

export default Popup;