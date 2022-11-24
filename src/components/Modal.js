import "../style/modal.css";


function Modal(props) {
    function hideModal() {
        props.toggleDisplayModal(false)
        document.getElementById('inputModal').value = ""
    }
    function submitModal() {
        props.toggleDisplayModal(false)
        props.subtractMoneyFromModal(document.getElementById('inputModal').value)
        document.getElementById('inputModal').value = ""
    }
    return (
        <div className={props.displayModal ? "modal-view show" : "modal-view"}>
            <div className="modal">
                <p>Hvor mye kostet varen?</p>
                <input id="inputModal" type="number" name="weight" placeholder="0"></input>
                <div className="modal-btn">
                    <button onClick={hideModal}>Avbryt</button>
                    <button onClick={submitModal}>OK</button>
                </div>
            </div>
        </div>

    );
}

export default Modal;

